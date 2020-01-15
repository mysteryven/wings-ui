import React from 'react';
import Popover from '../../src/Popover';
import Button from '../../src/Button';

export default {
  title: 'Popover',
  component: Popover,
};


export const PopoverExample = () => {
  return (
    <div style={{margin: 100}}>
        <Popover content="我问一下，你今天快乐吗，我感觉你非常的快乐？">
          <Button style={{marginRight: 8}}>Top</Button>
        </Popover>
        <Popover position="bottom" content="我问一下，你今天快乐吗，我感觉你非常的快乐？">
          <Button>Bottom</Button>
        </Popover>
    </div>
  )
}

export const LongPressPopover = () => (
 <div style={{margin: 100}}>
   <Popover type="longPress" content="我问一下，你今天快乐吗">
     <Button style={{marginRight: 8}}>Default long press is 300ms</Button>
   </Popover>
   <Popover type="longPress" interval={500} position="bottom" content="我问一下，你今天快乐吗">
     <Button>Bottom</Button>
   </Popover>
 </div>
);

