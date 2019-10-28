import React from 'react';
import Player from '../../../../src/Player';


const PlayerExample = () => {
  const link = "http://m10.music.126.net/20191028165112/81c6ff3db802ab9b90661184c645c4e9/ymusic/070e/530f/035b/0de5963201de608151e8410734810f2a.mp3";
  const cover ="https://i.loli.net/2019/10/28/lDGS2ofqdA7HEwi.png";
  return (
    <Player src={link} cover={cover} />
  );
}

export default PlayerExample;