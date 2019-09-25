import * as React from "react";
import { CSSProperties, FunctionComponent } from "react";
import sc from '../utils/classname';

interface IProps {
    span?: number,
    gutter?: number,
    offset?: number,
    className?: string,
    style?: CSSProperties,
}

const Col: FunctionComponent<IProps> = (props) => {
    const { className, style, ...restProps } = props;
    const offset = props.offset ? `w-col-offset-${props.offset}` : undefined;
    const colClassName = sc('w-col', `w-col-${props.span}`, offset);
    const padding = props.gutter ? `0 ${props.gutter / 2}px` : undefined;

    return (
        <div className={colClassName} style={{ padding }}>
            <div className={className} style={style} {...restProps}>
                {props.children}
            </div>
        </div>
    );
};

Col.defaultProps = {
    span: 24
};

export default Col;