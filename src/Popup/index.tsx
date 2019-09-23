import * as React from 'react';
import './index.scss';
import Transition from '../Transition';
import sc from '../utils/classname';

interface PopupProps extends HTMLDivElement {
  visible: boolean;
  position?: 'top' | 'right' | 'bottom' | 'left';
}

const Popup: React.FunctionComponent<PopupProps> = (props) => {
  const { visible, position, className, ...restProps } = props;
  console.log(visible);
  const popupClasses = sc(
    'w-popup',
    className,
    position ? `w-popup-pos-${props.position}` : 'w-popup-pos-bottom'
  )

  return (
    <Transition
      visible={true}
    >
      <div className={popupClasses} style={{ border: '1px solid red' }}>
        <div className="w-popup-content">
          {props.children}
        </div>
      </div>
    </Transition>

  );
};

export default Popup;

Popup.defaultProps = {
  visible: true
}