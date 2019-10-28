import * as React from 'react';

interface PlayerProps {
  src: string;
}

const Player: React.FC<PlayerProps> = (props) => {
  return (
    <div>
     <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" style={{}}>
        <circle cx="25" cy="25" r="25" fill="#C2C2C4" />
        <path d="M 25  4 A 21 21 0 0 1 25 46" 
          strokeWidth="4"
          stroke="#E83C3C"
          fill="transparent"
        />
     </svg> 
    </div>
  )
}

export default Player;