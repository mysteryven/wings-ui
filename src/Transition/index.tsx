import * as React from "react";
import { useState, useEffect, useRef } from 'react'
import { CSSProperties, FunctionComponent } from "react";
import { compose, pipe } from '../utils/fp';
import './index.scss';

interface TransitionProps {
  beforeEnter?: CSSProperties;
  enterActive?: CSSProperties;
  afterEnter?: CSSProperties;
  beforeLeave?: CSSProperties;
  leaveActive?: CSSProperties;
  afterLeave?: CSSProperties;
}

const Transition: FunctionComponent<TransitionProps> = (props) => {
  const divEl = useRef<null | HTMLDivElement>(null);
  const [prevStyle, saveStyle] = useState<CSSProperties>({});
  const childRef = useRef<null | HTMLElement>(null);
  const [composedStyle, setStyle] = useState<CSSProperties>({});
  const child = React.Children.only(props.children) as React.ReactElement;
  const [isTransitionEnd, setTransitionStatus] = useState<boolean>(true);
  const [hasTransitionEnd, setHasTransition] = useState<boolean>(false);

  useEffect(() => {
    if (divEl && divEl.current) {
      const div = divEl.current as HTMLDivElement;
      saveStyle(child.props.style);

      const preEnterStyle = productStyle(
        child.props.style,
        props.enterActive || {},
        props.beforeEnter || {},
      );
      const rePaintDiv = rePainter(div);
      const styleSetter = pipe(preEnterStyle, setStyle, rePaintDiv);

      styleSetter();
      styleSetter(props.afterEnter);

      if (childRef && childRef.current) {
        setTransitionStatus(false);
        childRef.current.addEventListener('transitionend', handleTransitionEnd);
      }
    }
  }, []);

  useEffect(() => {
    if (isTransitionEnd && hasTransitionEnd) {
      document.removeEventListener('transitionend', handleTransitionEnd)
      setStyle(prevStyle);
    }
  }, [isTransitionEnd, hasTransitionEnd])

  useEffect(() => {
    return () => {
      if (divEl && divEl.current) {
        const div = divEl.current as HTMLDivElement;

        const preLeaveStyle = productStyle(
          props.leaveActive || {},
          props.beforeLeave || {},
        );
        const rePaintDiv = rePainter(div);
        const styleSetter = pipe(preLeaveStyle, setStyle, rePaintDiv);

        styleSetter();
        styleSetter(props.afterLeave);
      }
    }
  })

  function productStyle(...presetStyles: Array<CSSProperties>) {
    return function composeStyle(styles: Array<CSSProperties>) {
      return Object.assign({}, ...presetStyles, styles)
    }
  }

  function rePainter(el: HTMLDivElement) {
    return function inner() {
      el.getBoundingClientRect();
    }
  }

  function handleTransitionEnd(e: MouseEvent) {
    setTransitionStatus(true);
    setHasTransition(true);
  }

  return (
    <div
      className={"w-transition"}
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
    </div>
  )
};

export default Transition;