import { useEffect, useState } from 'react';
import { IState as IProps } from './Player';

// interface IState {
//     isPlaying: IProps["isPlaying"],
//     setIsPlaying: React.Dispatch<React.SetStateAction<IProps["isPlaying"]>>,
//     onChangeNextOrPlay: React.Dispatch<React.SetStateAction<string>>,
// }

type Control = {
    isPlaying: IProps["isPlaying"],
    setIsPlaying: (value: IProps["isPlaying"]) => void;
    onChangeNextOrPlay: (value: string ) => void

}


export default function Control({isPlaying, setIsPlaying, onChangeNextOrPlay}: Control) {
    let [classNamePauseOrPlay, setClassNamePauseOrPlay] = useState<string>("fas fa-play icon-play"); //mặc định sẽ ko play
  

    //KHI CLICK VAO PLAY PAUSE
    const handleChangPlayPause = () => {
        setIsPlaying(!isPlaying); 
    }

    //next pre
    const handleOnchangNextOrPre = (value: string) => {
        onChangeNextOrPlay(value)
    }


	useEffect(() => {
		isPlaying === true ? setClassNamePauseOrPlay("fas fa-pause") : setClassNamePauseOrPlay("fas fa-play icon-play") 
	}, [isPlaying])
    return (
        <div className="control">
            <div className="btn btn-repeat">
            <i className="fas fa-redo"></i>
            </div>
            <div className="btn btn-prev" onClick={() => handleOnchangNextOrPre("pre")}>
                <i className="fas fa-step-backward"></i>
            </div>
            <div className="btn btn-toggle-play" onClick={() => {handleChangPlayPause()}}>

                <i className={classNamePauseOrPlay}></i>
            </div>
            <div className="btn btn-next" onClick={() => handleOnchangNextOrPre("next")}>
                <i className="fas fa-step-forward"></i>
            </div>
            <div className="btn btn-random">
            <i className="fas fa-random"></i>
        </div>
    </div>
    )
}