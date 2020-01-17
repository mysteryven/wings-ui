import React from 'react';
import { success } from '../../src/Message'
import Button from '../../src/Button';

export default {
  title: 'Message',
  component: <div/>
}

export const MessageDoc = () => {
  const onShowMessageHandle = () => {
    success({ duration: 4000, content: '恭喜你，更新成功' });
  };

  return (
    <Button style={{marginTop: '100px'}} onClick={onShowMessageHandle}>Show Message</Button>
  );
};

