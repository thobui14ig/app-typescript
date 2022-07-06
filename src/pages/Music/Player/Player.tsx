import React,{useRef, useState, useEffect, useCallback} from 'react'
import Control from './Control'
import PlayList from './PlayList'
import {IState as IProps} from '../index';
import Progress from './Progress'


export interface IState{
    songs: IProps["songs"],
    isPlaying: boolean,
    positionSong: number,
}

//convert 00:00
function convertTime(curentTime: number){ 
    curentTime %= 3600;
    let minutes =  Math.round(Math.floor(curentTime / 59)) ;
    let seconds =  Math.round(curentTime % 59) ;
    let a: string | number = minutes;
    let b: string | number = seconds;
    a = a < 10 ? "0" + a : a;
    b = b < 10 ? "0" + b : b;
    return a + ":" + b
    
}
export default function Player({songs}: IProps) {
    const audio = useRef<HTMLAudioElement>(null); 


    const [isPlaying, setIsPlaying]         = useState(false);
    const [rotateImage, setRotateImage]     = useState<boolean>(false); //xoay ảnh
    const [positionSong, setPositionSong] 	= useState(0);
    const [playIng, setPlayIng] 			= useState<number>(0); //thanh tiến độ bài hát

    const [times, setTime] = useState<string>("00:00");

    const [duration, setDuration] = useState<string | number>("00:00");    
    //play
    useEffect(() => {
        setDuration(convertTime((audio.current as HTMLAudioElement).duration) );
        if (isPlaying) {
            (audio.current as HTMLAudioElement).play()
            setRotateImage(true)
			
        } else {
            (audio.current as HTMLAudioElement).pause();
            setRotateImage(false)
        }
    }, [isPlaying, positionSong]);
    // dung useCallBACK de tao ra function dung 1 lan
    const onChangSong = useCallback((position: any) => {
        setIsPlaying(true);
        setPositionSong(position)
      }, []);
    //next pre
    const onChangeNextOrPlay = (type: any) => {
        if(isPlaying === false) setIsPlaying(true); //nếu chưa play cho play luôn
    	if(type === "pre"){
    		if(positionSong === 0){
    			setPositionSong(0)
    		}else{
    			setPositionSong(positionSong - 1)
    		}	
    	}else if(type === "next"){
    		if(positionSong + 1 === songs.length) return setPositionSong(0) ;
    		setPositionSong(positionSong + 1)
    		
    	}
    }

    //currentTime hiển thị thời gina bắt đầu phát
    //duration: thời lượng bài hát
    useEffect(() => {

    	(audio.current as HTMLAudioElement).ontimeupdate = function(){     //update theo thời gian phát
    		let percentCurent = ((audio.current as HTMLAudioElement).currentTime * 100) / (audio.current as HTMLAudioElement).duration; //phần trăm bài hát
            // console.log(percentCurent)
    		if(percentCurent === 100){ //bài hát đã đạt 100%
    			if(positionSong + 1 === songs.length) return setPositionSong(0) //nếu index bài hát lớn hơn bài hát cuối cùng
    			return setPositionSong(positionSong + 1)
    			
    		}
            let time = convertTime((audio.current as HTMLAudioElement).currentTime);
            setTime(time)
        
            setPlayIng(percentCurent) //set phần trăm
				
    	}	
    })
    //thời gian phát


    //tua
    const OnchangeChangePlay = (value: any) => {

        let curentSecond = (value * (audio.current as HTMLAudioElement).duration) / 100;
        (audio.current as HTMLAudioElement).currentTime = curentSecond;
    }



    return (
        <div className="player">

            <div className="dashboard">
    
                <header>
                    <h4>Đang phát:</h4>
                    <h2>{songs[positionSong].title}</h2>
                </header>
        
                <div className="cd">
                    <div className={rotateImage === false ? "cd-thumb" : "cd-thumb cd-play" } style={{backgroundImage: "url(" +  songs[positionSong].img_src  + ")"}} >
                    </div>
                </div>
        
                <Control isPlaying={isPlaying} setIsPlaying={setIsPlaying} onChangeNextOrPlay={onChangeNextOrPlay}/>

                <Progress playIng={playIng} OnchangeChangePlay={OnchangeChangePlay}/>
                <span className="startSongDuration">{times}</span>
			    <span className="songDuration">{duration === "NaN:NaN" ? "00:00" : duration}</span>
                
                <audio media-player="audioPlayer" id="audio"  src={songs[positionSong].src} ref={audio} crossOrigin="anonymous"></audio>
            </div>
            <PlayList songs={songs} onChangSong={onChangSong} positionSong={positionSong}/>

        </div>
    )
}