import { useState } from 'react';
import Player from './Player/Player';
import './style.css';
export interface IState {
  songs: songs[],

}

interface songs {
    title: string;
    artist: string;
    img_src: string;
    src: string;
}

function Music() {



  const [songs] = useState<IState["songs"]>([
    
    {
      title: "Đế Vương1",
      artist: "Đình Dũng",
      img_src: "./images/song-4.jpg",
      src: "./music/bai-1.mp3"
    },
    {
      title: "Ve-Di-De-Tro-Ve-6-Phan-Manh-Quynh",
      artist: "Phan-Manh-Quynh",
      img_src: "./images/song-1.jpg",
      src: "./music/bai-2.mp3"
    },
    {
      title: "Song 2",
      artist: "Artist 2",
      img_src: "./images/song-2.jpg",
      src: "./music/bai-3.mp3"
    },
    {
      title: "Song 3",
      artist: "Artist 3",
      img_src: "./images/song-3.jpg",
      src: "./music/bai-4.mp3"
    },

  ]);
  return (
    <div className="App">
        <Player songs={songs}/>
    </div>
  );
}

export default Music;