import * as React from 'react';
import Transition from '../Transition';

interface PopupProps {
  visible?: boolean;
}

const Popup: React.FunctionComponent<PopupProps> = (props) => {
  return (
    <div className="w-popup">
      <div className="w-popup-mask"></div>
      <div className="w-popup-content">
        {props.children}
      </div>
    </div>
  );
};

export default Popup;