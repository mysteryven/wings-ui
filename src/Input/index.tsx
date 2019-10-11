import * as React from 'react';
import sc from '../utils/classname';
import './index.scss';
import {InputHTMLAttributes} from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {

}

const Input: React.FunctionComponent<IProps> = (props) => {
  const { className, ...restProps } = props;

  const inputClassNames = sc('w-input', className);
  return (
    <input className={inputClassNames}  {...restProps} />
  );
};

export default Input;