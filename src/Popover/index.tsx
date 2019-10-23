import * as React from 'react';

interface PopoverProps {
  content: React.ReactNode | string;
}

const Popover: React.FC<PopoverProps> = (props) => {
  return (
    <div className="w-popover">
      <div className="w-popover-content">{props.content}</div>
      {props.children}
    </div>
  )
}

export default Popover;