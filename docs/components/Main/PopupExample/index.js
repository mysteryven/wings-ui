import Transition from "../../../../src/Transition";
import Popup from "../../../../src/Popup";
import React, { useState } from "react";

const PopupExample = () => {
  const [isVisible, setVisible] = useState(false);
  return (
    <div>
      <button onClick={() => { setVisible(!isVisible) }}>visible</button>
      <Popup visible={isVisible}>
        <p>Hello world</p>
        <p>Hello world</p>
      </Popup>
    </div>
  )
}

export default PopupExample