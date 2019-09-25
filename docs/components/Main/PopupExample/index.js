import Popup from "../../../../src/Popup";
import Button from "../../../../src/Button";
import React, { useState } from "react";

const PopupExample = () => {
  const [isBottomVisible, setBottomVisible] = useState(false);
  const [isLeftVisible, setLeftVisible] = useState(false);
  return (
    <div>
      <div>
        <Button full style={{ marginBottom: '12px' }} theme="primary" onClick={() => { setLeftVisible(true) }}>Popup from left</Button>
        <Button full theme="primary" onClick={() => { setBottomVisible(true) }}>Popup from bottom</Button>
      </div>

      <Popup visible={isLeftVisible} position="left">
        <Button onClick={() => { setLeftVisible(false) }}>close</Button>
        <div style={{ paddingRight: '12px' }}>
          <p>Html</p>
          <p>JavaScript</p>
          <p>CSS</p>
          <p>Java</p>
          <p>Go</p>
        </div>
      </Popup>
      <Popup visible={isBottomVisible}>
        <Button onClick={() => { setBottomVisible(false) }}>close</Button>
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