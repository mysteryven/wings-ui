import React from 'react';
import Button from '../../../../src/Button'
import './index.scss'

const ButtonDoc = () => {
  return (
    <div>
      <p>按钮类型</p>
      <div className={"buttonWrapper"}>
        <Button className={"item"}>Hi, there</Button>
        <Button className={"item"} theme="primary">Hi, there</Button>
        <Button className={"item"} theme="warning">Hi, there</Button>
      </div>
      <p>禁用</p>
      <div className={"buttonWrapper"}>
        <Button className={"item"} disabled>Hi, there</Button>
        <Button className={"item"} theme="primary" disabled>Hi, there</Button>
        <Button className={"item"} theme="warning" disabled>Hi, there</Button>
      </div>
    </div>
  )
}

export default ButtonDoc;