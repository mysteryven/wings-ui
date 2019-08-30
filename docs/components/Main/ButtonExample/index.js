import React from 'react';
import Button from '../../../../src/Button'
import './index.scss'

const ButtonDoc = () => {
  return (
    <div style={{ marginLeft: '16px' }}>
      <p>按钮类型</p>
      <div className={"buttonWrapper"}>
        <Button className={"item"}>Hello</Button>
        <Button className={"item"} theme="primary">Hello</Button>
        <Button className={"item"} theme="warning">Hello</Button>
      </div>
      <p>禁用</p>
      <div className={"buttonWrapper"}>
        <Button className={"item"} disabled>Hello</Button>
        <Button className={"item"} theme="primary" disabled>Hello</Button>
        <Button className={"item"} theme="warning" disabled>Hello</Button>
      </div>
      <p>full 属性</p>
      <div className={"buttonWrapper"}>
        <Button className={"item"} full>Hello</Button>
        <Button className={"item"} theme="primary" full>Hello</Button>
        <Button className={"item"} theme="warning" full>Hello</Button>
      </div>
    </div>
  )
}

export default ButtonDoc;