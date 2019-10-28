import React from 'react';
import Player from '../../../../src/Player';


const PlayerExample = () => {
  const link = "http://m10.music.126.net/20191028100115/f6cb7b61089959b8e96ce20a49022a71/ymusic/0fbc/90ab/d6e3/bcab4f32d6688a91d03b523257229aac.mp3";
  return (
    <Player src={link} />
  );
}

export default PlayerExample;