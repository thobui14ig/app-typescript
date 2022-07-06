import React from 'react';

interface Progress  {
    playIng: number;
    OnchangeChangePlay: (value: number) => void;
  
};
const Progress: React.FC<Progress> = ({ playIng,OnchangeChangePlay}) => {
    //tua
    const handleChangePlay = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = + e.target.value;
        OnchangeChangePlay(value)
    }


    return (
        <input id="progress" className="progress" type="range" value={playIng ? playIng : 0} step="1" min="0" max="100" onChange={(e) => handleChangePlay(e)} />
    );
}

export default Progress;