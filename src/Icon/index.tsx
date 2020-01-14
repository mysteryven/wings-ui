import './index.scss';
import * as React from 'react';
import play from './play.svg';
import pause from './pause.svg';
import loading from './loading.svg';

interface ImgUrl {
    loading: string;
    pause: string;
    play: string;
}

const imgUrls = {
    loading,
    pause,
    play
};

interface IconProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    name?: 'loading' | 'pause' | 'play';
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
    const {name, ...restProps} = props;
    return (
        <div>
            <img src={name && imgUrls[name]} {...restProps}  />
        </div>
    );
};

export default Icon;