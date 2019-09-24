import React, { useEffect, useState } from 'react';
import './index.scss';
import Transition from '../Transition';
import sc from '../utils/classname';

interface PopupProps extends HTMLDivElement {
  visible: boolean;
  position?: 'top' | 'right' | 'bottom' | 'left';
}

const Popup: React.FunctionComponent<PopupProps> = (props) => {
  const { visible, position, className, ...restProps } = props;
  const popupClasses = sc(
    'w-popup',
    className,
    position ? `w-popup-pos-${props.position}` : 'w-popup-pos-bottom'
  )

  const [shouldRender, setShouldRender] = useState<boolean>(true);
  const [xxx, setX] = useState<boolean>(true);

  useEffect(() => {
    if (!visible) {
      setTimeout(() => {
        setX(false);
        setShouldRender(false);
      }, 100);
    } else {
      setShouldRender(true);
    }
  }, [props.visible])

  useEffect(() => {
    if (shouldRender) {
      setX(true);
    }
  }, [shouldRender])

  return (
    shouldRender ? (
      <div className={popupClasses}>
        <Transition
          visible={visible? xxx : visible}
          className="w-popup-mask-wrapper"
          beforeEnter={{
            opacity: 0,
            backgroundColor: 'transparent'
          }}
          afterEnter={{
            opacity: 1,
            backgroundColor: 'rgba(0,0,0, 0.4)'
          }}
          enterActive={{
            transition: 'all 0.3s'
          }}
          beforeLeave={{
            opacity: 1,
            backgroundColor: 'rgba(0,0,0, 0.4)'
          }}
          afterLeave={{
            opacity: 0,
            backgroundColor: 'transparent'
          }}
          leaveActive={{
            transition: 'all 0.3s'
          }}
        >
          <div className="w-popup-mask" />
        </Transition>
        <div className="w-popup-content">
          <Transition
            visible={visible ? xxx : visible}
            beforeEnter={{
              transform: 'translateY(100%)'
            }}
            afterEnter={{
              transform: 'translateY(0%)',
            }}
            enterActive={{
              transition: 'all 0.3s'
            }}
            beforeLeave={{
              transform: 'translateY(0px)'
            }}
            afterLeave={{
              transform: 'translateY(100%)'
            }}
            leaveActive={{
              transition: 'all 0.3s'
            }}
          >
            <div className="w-popup-content-inner">
              {props.children}
            </div>
          </Transition>
        </div>
      </div>
    ) : null);
};

export default Popup;

Popup.defaultProps = {
  visible: true
}