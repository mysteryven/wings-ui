import { CSSProperties, FunctionComponent, ReactElement } from "react";
import * as React from "react";
import Col from './col';
import './index.scss';

interface IProps {
    gutter?: number,
    className?: string,
    style?: CSSProperties
}

const Row: FunctionComponent<IProps> = (props) => {
    const children = React.Children.map(props.children, (child) => {
        const element = child as ReactElement<any>;
        return element.type === Col && React.cloneElement(element, {
            gutter: props.gutter
        });
    }).filter(i => i);

    const marginLeft = props.gutter ? `${-props.gutter / 2}px` : undefined;
    const marginRight = props.gutter ? `${-props.gutter / 2}px` : undefined;
    const { className, style } = props;
    return (
        <div className={`w-row ${className}`} style={{ marginLeft, marginRight, ...style }}>{children}</div>
    );
};

Row.defaultProps = {
    gutter: 0
};

export default Row;