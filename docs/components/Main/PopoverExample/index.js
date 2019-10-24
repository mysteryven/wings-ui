import React, {useState, useRef, useEffect} from 'react';
import Popover from '../../../../src/Popover';
import Button from '../../../../src/Button';

const PopoverExample = () => {
  return (
    <>
    <div style={{ marginTop: 60, marginLeft: 100 }}>
      <h5>点击触发</h5> 
      <Popover content="我问一下，你今天快乐吗，我感觉你非常的快乐？">
        <Button>Top</Button>
      </Popover>
      <Popover position="bottom" content="我问一下，你今天快乐吗，我感觉你非常的快乐？">
        <Button>Bottom</Button>
      </Popover>
    </div>
    <div style={{ marginTop: 60, marginLeft: 100 }}>
      <h5>长按触发</h5> 
      <Popover type="longPress" content="我问一下，你今天快乐吗">
        <Button>Top</Button>
      </Popover>
      <Popover type="longPress" position="bottom" content="我问一下，你今天快乐吗">
        <Button>Bottom</Button>
      </Popover>
    </div>
    </>
  )
}

export default PopoverExample;