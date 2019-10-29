import React from 'react';
import Player from '../../../../src/Player';


const PlayerExample = () => {
  const link = "./components/Main/PlayerExample/example.mp3";
  const cover ="./components/Main/PlayerExample/cover.png";
  return (
    <Player src={link} cover={cover} />
  );
}

export default PlayerExample;