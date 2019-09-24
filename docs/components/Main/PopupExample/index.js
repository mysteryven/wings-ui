import Transition from "../../../../src/Transition";
import Popup from "../../../../src/Popup";
import React, { useState } from "react";

const PopupExample = () => {
  const [isVisible, setVisible] = useState(true);
  return (
    <div>
      <button onClick={() => { console.log('hi'); setVisible(true) }}>{isVisible ? 'true' : 'false'}</button>
      <Popup visible={isVisible}>
        <p onClick={() => { setVisible(false) }}>close</p>
        <p>Hello world</p>
        <p>Hello world</p>
        <p>Hello world</p>
        <p>Hello world</p>
        <p>Hello world</p>
        <p>Hello world</p>
      </Popup>
    </div>
  )
}

export default PopupExample