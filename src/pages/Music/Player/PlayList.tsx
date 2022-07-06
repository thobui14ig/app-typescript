import React from 'react';
import { IState as IProps } from './Player';


type PlayList = {
    songs: IProps["songs"],
    onChangSong: (index: IProps["positionSong"]) => void;
    positionSong: IProps["positionSong"]
}
// interface IState{
//     songs: IProps["songs"],
//     onChangSong: React.Dispatch<React.SetStateAction<IProps["positionSong"]>>,
//     positionSong: IProps["positionSong"]
// }

const PlayList: React.FC<PlayList> = ({songs, onChangSong, positionSong}) => {
    const handleOnchangeSong = (index: number): void => {
        onChangSong(index);
    }
    console.log(songs)
    console.log(positionSong)



    const renderList = (): JSX.Element[] => {
        return songs.map((song: any, index: any) => {
            return(
                <div style={{backgroundColor: index === positionSong ? "red" : ""}} className="song" key={index} onClick={() => handleOnchangeSong(index)}>
                    <div className="thumb" style={{backgroundImage: "url(" +  song.img_src  + ")" }} >
                    </div>
                    <div className="body">
                    <h3 className="title">{song.title}</h3>
                    <p className="author">{song.artist}</p>
                    </div>
                    <div className="option">
                    <i className="fas fa-ellipsis-h"></i>
                    </div>
                </div>
            )
        })
    }

    return (
        <div className="playlist">
            {renderList()}

        </div>
    )
}


export default React.memo(PlayList);