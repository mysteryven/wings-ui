import React from 'react';
import './button.scss';
import {Button} from '@storybook/react/demo';
import ButtonComponent from '../../src/Button';
import Icon from '../../src/Icon';

export default {
  title: '按钮',
  component: Button,
};

export const Buttons = () => {
  return (
    <div style={{marginLeft: '16px'}}>
      <Icon type={"pause"} />
      <p>按钮类型</p>
      <div className={"buttonWrapper"}>
        <ButtonComponent className={"item"}>Default</ButtonComponent>
        <ButtonComponent className={"item"} theme="primary">Primary</ButtonComponent>
        <ButtonComponent className={"item"} theme="warning">Warning</ButtonComponent>
      </div>
      <p>禁用</p>
      <div className={"buttonWrapper"}>
        <ButtonComponent className={"item"} disabled>Default</ButtonComponent>
        <ButtonComponent className={"item"} theme="primary" disabled>Primary</ButtonComponent>
        <ButtonComponent className={"item"} theme="warning" disabled>Warning</ButtonComponent>
      </div>
      <p>full 属性</p>
      <div className={"buttonWrapper"}>
        <ButtonComponent className={"item"} full>Hello</ButtonComponent>
      </div>
      <p>loading 加载中</p>
      <div className={"buttonWrapper"}>
        <ButtonComponent className={"item"} full loading>Hello</ButtonComponent>
        <ButtonComponent className={"item"} loading>Hello</ButtonComponent>
        <ButtonComponent theme={"primary"} className={"item"}  loading>Hello</ButtonComponent>
        <ButtonComponent theme={"warning"} className={"item"}  loading >Hello</ButtonComponent>
      </div>
    </div>
  )
};

Buttons.story = {
  name: '普通按钮',
};

