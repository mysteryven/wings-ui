import * as React from 'react';
import { FunctionComponent, MouseEvent } from 'react';
import sc from '../utils/classname';
import './index.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: 'primary' | 'default' | "warning";
  onClick?: React.MouseEventHandler;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  full?: boolean;
}

const Button: FunctionComponent<ButtonProps> = (props) => {
  const { className, theme, onClick, disabled, loading, full, ...restProps } = props;
  const btnClasses = sc(
    'w-button',
    className,
    theme,
    disabled ? 'w-disabled' : '',
    full ? 'w-full' : ''
  );

  function onButtonClick(e: MouseEvent<HTMLButtonElement>): void {
    if (!disabled && !loading) {
      onClick && onClick(e);
    }
  }

  return (
    <button className={btnClasses} onClick={onButtonClick} {...restProps}>
      {props.children}
    </button>
  );
};
export default Button; Button.defaultProps = {
  theme: 'default',
};