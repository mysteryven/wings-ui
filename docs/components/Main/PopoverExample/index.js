import React from 'react';
import Popover from '../../../../src/Popover';
import Button from '../../../../src/Button';

const PopoverExample = () => {
  return ( 
    <div style={{ marginTop: 100, marginLeft: 100 }}>
      <Popover content="我问一下，你今天快乐吗">
        <Button>xxxxxxxx</Button>
      </Popover>
    </div>
  ) 
}

export default PopoverExample;