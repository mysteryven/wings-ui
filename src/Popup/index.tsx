import * as React from "react";
import { useLayoutEffect, useState, CSSProperties } from "react";
import * as ReactDOM from "react-dom";
import "./index.scss";
import Transition from "../Transition";
import sc from "../utils/classname";

interface PopupProps {
  visible: boolean;
  position: "bottom" | "left";
  className: string;
}

const Popup: React.FunctionComponent<PopupProps> = props => {
  const { visible, position, className, ...restProps } = props;
  const popupClasses = sc(
    "w-popup",
    className,
    `w-popup-pos-${props.position}`
  );

  const [shouldRender, setShouldRender] = useState<boolean>(true);
  const [interval, setInterval] = useState<number>(400);
  const [isInnerVisible, setIsInnerVisible] = useState<boolean>(true);
  const [first, setIsFirst] = useState<boolean>(true);

  useLayoutEffect(() => {
    if (!visible) {
      setIsInnerVisible(false);
      if (first) {
        setShouldRender(false);
      } else {
        setTimeout(() => {
          setShouldRender(false);
        }, interval);
      }
    } else if (visible && !isInnerVisible) {
      setShouldRender(true);
      setIsInnerVisible(true);
      setIsFirst(false);
    }
  }, [props.visible]);

  const popupElement = shouldRender ? (
    <div className={popupClasses}>
      <Transition
        interval={interval}
        visible={isInnerVisible}
        className="w-popup-mask-wrapper"
        {...maskPosition}
      >
        <div className="w-popup-mask" />
      </Transition>
      <div className="w-popup-content" data-testid={props.position}>
        <Transition
          className={`w-pop-content-wrapper-${props.position}`}
          interval={interval}
          visible={isInnerVisible}
          {...contentPosition[props.position]}
        >
          <div className="w-popup-content-inner">{props.children}</div>
        </Transition>
      </div>
    </div>
  ) : null;

  return ReactDOM.createPortal(popupElement, document.body);
};

export default Popup;

Popup.defaultProps = {
  visible: true,
  position: "bottom"
};

const maskPosition = {
  beforeEnter: {
    opacity: 0,
    backgroundColor: "transparent"
  },
  afterEnter: {
    opacity: 1,
    backgroundColor: "rgba(0,0,0, 0.4)"
  },
  beforeLeave: {
    opacity: 1,
    backgroundColor: "rgba(0,0,0, 0.4)"
  },
  afterLeave: {
    opacity: 0,
    backgroundColor: "transparent"
  }
};

interface ContentPositionItem {
  beforeEnter: CSSProperties;
  afterEnter: CSSProperties;
  beforeLeave: CSSProperties;
  afterLeave: CSSProperties;
}

interface ContentPosition {
  bottom: ContentPositionItem;
  left: ContentPositionItem;
}

const contentPosition: ContentPosition = {
  bottom: {
    beforeEnter: {
      transform: "translateY(100%)"
    },
    afterEnter: {
      transform: "translateY(0%)"
    },
    beforeLeave: {
      transform: "translateY(0%)"
    },
    afterLeave: {
      transform: "translateY(100%)"
    }
  },
  left: {
    beforeEnter: {
      transform: "translateX(-100%)"
    },
    afterEnter: {
      transform: "translateX(0%)"
    },
    beforeLeave: {
      transform: "translateX(0%)"
    },
    afterLeave: {
      transform: "translateX(-100%)"
    }
  }
};
