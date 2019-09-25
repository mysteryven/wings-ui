import * as React from 'react';
import { useState, useEffect, useRef, EventHandler } from 'react';
import { CSSProperties, FunctionComponent } from 'react';
import sc from '../utils/classname';
import { pipe } from '../utils/fp';
import './index.scss';

interface TransitionProps {
  beforeEnter?: CSSProperties;
  enterActive?: CSSProperties;
  afterEnter?: CSSProperties;
  beforeLeave?: CSSProperties;
  leaveActive?: CSSProperties;
  afterLeave?: CSSProperties;
  visible: boolean;
  className?: string;
}

const Transition: FunctionComponent<TransitionProps> = (props) => {
  const divEl = useRef<null | HTMLDivElement>(null);
  const [prevStyle, saveStyle] = useState<CSSProperties>({});
  const childRef = useRef<null | HTMLElement>(null);
  const [composedStyle, setStyle] = useState<CSSProperties>({});
  const [isTransitionEnd, setTransitionStatus] = useState<boolean>(true);
  const [hasTransitionEnd, setHasTransition] = useState<boolean>(false);
  const [shouldRender, setShouldRender] = useState<boolean>(true);
  const [hasRendered, setHasRendered] = useState<boolean>(true);

  const child = React.Children.only(props.children) as React.ReactElement;

  useEffect(() => {
    if (isTransitionEnd && hasTransitionEnd) {
      document.removeEventListener('transitionend', handleBeginEnd);
      setStyle(prevStyle);
    }
    if (!shouldRender && hasTransitionEnd) {
      setStyle(prevStyle);
      document.removeEventListener('transitionend', handleLeaveEnd);
    }
  }, [isTransitionEnd, hasTransitionEnd, shouldRender]);

  useEffect(() => {
    if (props.visible && !hasRendered) {
      setShouldRender(true);
      setHasRendered(true);
      return;
    }

    if (!shouldRender) {
      return;
    }

    saveStyle(child.props.style);
    setTransitionStatus(false);
    let prev = {}
    if (typeof child.props.style === 'object') {
      prev = JSON.parse(JSON.stringify(child.props.style));
    }
    const { visible, enterActive, leaveActive, beforeEnter, beforeLeave } = props;
    const presetStyle = productStyle(
      prev,
      visible ? beforeEnter : beforeLeave
    );

    const rePaintDiv = rePainter(divEl.current as HTMLDivElement);

    const beforeStyleSetter = pipe(presetStyle, setStyle);
    beforeStyleSetter()
    rePaintDiv();

    setTimeout(() => {
      beforeStyleSetter(visible ?
        { ...props.enterActive, ...props.afterEnter } :
        { ...props.leaveActive, ...props.afterLeave }
      );

      if (childRef && childRef.current) {
        setTransitionStatus(false);
        const handle = visible ? handleBeginEnd : transitionEndWrapper;

        childRef.current.addEventListener('transitionend', handle);
      }
    }, 0)

    function transitionEndWrapper(e: any) {
      setHasRendered(false);
      setShouldRender(false);
      handleLeaveEnd(e);
    }
  }, [shouldRender, props.visible, hasRendered]);

  function productStyle(
    base: CSSProperties = {},
    active: CSSProperties = {},
    before: CSSProperties = {}
  ) {
    const presetStyles = [base, active, before];

    return function composeStyle(styles: CSSProperties = {}) {
      return Object.assign({}, ...presetStyles, styles);
    };
  }

  function rePainter(el: HTMLDivElement) {
    return function inner() {
      el.getBoundingClientRect();
    };
  }

  function handleBeginEnd(e: MouseEvent) {
    setTransitionStatus(true);
    setHasTransition(true);
  }

  function handleLeaveEnd(e: MouseEvent) {
    setTransitionStatus(true);
    setShouldRender(false);
  }

  return shouldRender ? (
    <div
      className={sc('w-transition', props.className)}
      ref={divEl}
    >
      {
        React.cloneElement(
          child, {
          ref: childRef,
          style: composedStyle
        }
        )
      }
    </div>) : null;
};

export default Transition;