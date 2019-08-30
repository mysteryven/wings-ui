import * as React from 'react';
import {FunctionComponent} from 'react';

interface ButtonProps {
  type?: 'primary' | 'default';
}

const Button: FunctionComponent<ButtonProps> = () => {
  return (
    <button className={'w-button'}>I'm Button</button>
  );
};

export default Button;