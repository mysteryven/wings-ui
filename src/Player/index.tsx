import React, { useEffect, useState, useRef } from 'react';
import Icon from '../Icon';
import sc from '../utils/classname';
import './index.scss';

interface PlayerProps extends HTMLDivElement {
  src: string;
  cover?: string;
  autoplay?: boolean;
}

let timer:any = null;

const Player: React.FC<PlayerProps> = (props) => {
  const { className, cover, autoplay } = props;

  const [musicStatus, setMusicStatus] = useState<boolean>(false);
     
  const [position, setPosition] = useState<string>('');
  const [reverse, setReverse] = useState<0 | 1>(1);
  const audioRef = useRef<null | HTMLAudioElement>(null);

  function handleIconClick() {
    if (audioRef && audioRef.current) {
      if (musicStatus === true) { // playing
        setMusicStatus(false);
        audioRef.current.pause();
        clearTimeout(timer);
        timer = null

      } else { // pausing
        setMusicStatus(true);
        audioRef.current.play();
        computePercent()
      }
    }
  }

  useEffect(() => {
    return () => {
      clearTimeout(timer)
      timer = null;
    }
  })

  function computePercent() {
    if (!audioRef || !audioRef.current) {
      return
    }
    const duration:number = +audioRef.current.duration;
    inner();


    function inner() {
      if (!audioRef || !audioRef.current) {
        return
      }
      const current:number = +audioRef.current.currentTime;
      if (current >= duration) {
        return
      }
      const deg:number = (+(current / duration).toFixed(2)) * 360;
     
      let r = 31, border = 4;
      let x = r + border;
      let y = r + border;
  
      if (deg > 0 && deg <= 90 ) {
        x +=  r * soc(deg);
        y -=  r * soc(deg, 'cos') ;
        setPosition(`M 35 4 A 31 31 0 0 1 ${x} ${y}`);
      } else if (deg > 90 && deg <= 180) {
        x += r * soc(180 - deg);
        y += r * soc(180 - deg, 'cos');
        setPosition(`M 35 4 A 31 31 0 0 1 ${x} ${y}`);
      } else if (deg > 180 && deg <= 270) {
        x -= r * soc(270 - deg, 'cos');
        y += r * soc(270 - deg);
        setPosition(`M 35 4 A 31 31 0 0 1 35 66 M 35 66 A 31 31 0 0 1 ${x} ${y}`);
      } else if (deg > 270 && deg <= 360 ) {
        x -= r * soc(360 - deg);
        y -= r * soc(360 - deg, 'cos');
        setPosition(`M 35 4 A 31 31 0 0 1 35 66 M 35 66 A 31 31 0 0 1 ${x} ${y}`);
      }

      setPosition("M 35  4 A 31 31 0 0 1 8 51");

      timer = setTimeout(inner, 500);
    }
  }

  function soc(deg: number, name: 'sin' | 'cos' = 'sin') {
    return Math.abs(Math[name](deg * Math.PI / 180));
  }

  return (
    <div className={sc('w-player-wrapper', className)}>
      <div className={`w-player-mask ${musicStatus ? 'active' : ''}`} style={{backgroundImage: `url(${cover})`}} />
      <div className="w-player-icon-mask" />
      <Icon name={musicStatus ? 'pause' : 'play'} />
      <svg className="w-player-svg" width="70" height="70" xmlns="http://www.w3.org/2000/svg">
        <circle cx="35" cy="35" r="35" fill="#C2C2C4" />
        <path d={position}
          strokeWidth="4"
          stroke="#E83C3C"
          fill="transparent"
        />
      </svg>
      <audio
        ref={audioRef}
        src={props.src}
        autoPlay={autoplay}
      />
    </div>
  )
}

export default Player;