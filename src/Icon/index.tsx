import './index.scss'
import * as React from "react";
import './loading.svg'
import sc from '../utils/classname'

interface IconProps extends React.SVGAttributes<SVGElement> {
    name?: string;
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
    const { className, name, ...restProps } = props;
    return (
        <svg className={sc('w-svg', className)} {...restProps} >
            <use xlinkHref={`#${name}`} />
        </svg>
    );
};

export default Icon