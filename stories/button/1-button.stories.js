import React from 'react';
import './button.scss';
import Button from '../../src/Button';

export default {
  title: 'Button',
  component: Button,
};

export const ButtonDoc = () => (
  <Button>Hello</Button>
)


export const Buttons = () => {
  return (
    <div className={"buttonWrapper"}>
      <Button className={"item"}>Default</Button>
      <Button className={"item"} theme="primary">Primary</Button>
      <Button className={"item"} theme="warning">Warning</Button>
    </div>
  )
};

export const disabled = () => (
  <div className={"buttonWrapper"}>
    <Button className={"item"} disabled>Default</Button>
    <Button className={"item"} theme="primary" disabled>Primary</Button>
    <Button className={"item"} theme="warning" disabled>Warning</Button>
  </div>
);

export const loading = () => (
  <div className={"buttonWrapper"}>
    <Button className={"item"} full loading>Hello</Button>
    <Button className={"item"} loading>Hello</Button>
    <Button theme={"primary"} className={"item"} loading>Hello</Button>
    <Button theme={"warning"} className={"item"} loading>Hello</Button>
  </div>
);
