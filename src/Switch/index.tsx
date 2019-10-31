import React, {useState} from 'react';
import { CSSProperties } from 'react';

const Switch = () => {
  const [style, setStyle] = useState<CSSProperties>({});

  function changeStatus() {
    
  }

  return (
    <div className="w-switch" onClick={changeStatus}>
      <div className="w-switch-button" style={style}  />
    </div>
  )
}

export default Switch;