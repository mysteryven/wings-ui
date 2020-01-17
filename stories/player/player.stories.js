import React from 'react';
import Player from '../../src/Player';
import link  from './example.mp3';
import cover from './cover.png';

export default {
  title: 'Player',
  component: Player,
};

export const PlayerExample = () => {
  return (
    <Player src={link} cover={cover} />
  );
}

