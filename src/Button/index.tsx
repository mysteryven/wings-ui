import * as React from 'react';
import {forwardRef, FunctionComponent, MouseEvent, useImperativeHandle, useRef} from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import sc from '../utils/classname';
import './index.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: 'primary' | 'default' | 'warning';
    onClick?: React.MouseEventHandler;
    className?: string;
    disabled?: boolean;
    loading?: boolean;
    full?: boolean;
}

const Button: FunctionComponent<ButtonProps> = (props, ref) => {
    const {className, theme, onClick, disabled, loading, full, ...restProps} = props;
    const btnClasses = sc(
        'w-button',
        className,
        theme ? theme : 'default',
        disabled ? 'w-disabled' : '',
        full ? 'w-full' : '',
        loading ? 'w-loading' : ''
    );

    function onButtonClick(e: MouseEvent<HTMLButtonElement>): void {
        if (!disabled && !loading) {
            onClick && onClick(e);
        }
    }

    const iconWrapper = loading ?
        (
            <div className="w-loading-icon-wrapper">
                <Icon name="loading" className="w-loading-icon"/>
            </div>
        )
        :
        '';

    return (
        <button ref={ref} className={btnClasses} onClick={onButtonClick} {...restProps}>
            {iconWrapper}
            <span className={'w-button-inner'}>
        {props.children}
      </span>
        </button>
    );
};

Button.propTypes = {
    theme: PropTypes.oneOf(['default', 'primary']),
    /**
     When a button is in the loading state you can supply custom text
     */
    className: PropTypes.string
}

Button.defaultProps = {
    theme: 'default'
};

export default forwardRef(Button);
