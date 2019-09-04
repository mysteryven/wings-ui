import * as React from "react";
import { useState, useEffect, useRef } from 'react'
import { CSSProperties, FunctionComponent } from "react";
import { compose } from '../utils/fp';
import './index.scss';

interface TransitionProps {
  beforeEnter?: CSSProperties;
  enterActive?: CSSProperties;
  afterEnter?: CSSProperties;
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

      const preSetEnterActive = productStyle(
        { display: 'none' },
        child.props.style,
      );
      const preSetBeforeEnter = productStyle(
        child.props.style,
        { display: 'block' },
      )
      const rePaintDiv = rePainter(div);
      const enterActiveSetter = compose(preSetEnterActive, setStyle, rePaintDiv);
      const beforeEnterSetter = compose(preSetBeforeEnter, setStyle, rePaintDiv)

      enterActiveSetter([props.enterActive])
      beforeEnterSetter([props.enterActive, props.beforeEnter])
      enterActiveSetter([props.enterActive, { display: 'block' }])

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

  function productStyle(...presetStyles: Array<CSSProperties>) {
    return function composeStyle(styles: Array<CSSProperties>) {
      return Object.assign({}, ...presetStyles, ...styles)
    }
  }

  function rePainter(el: HTMLDivElement) {
    return function inner() {
      el.getBoundingClientRect();
    }
  }

  function handleTransitionEnd(e: MouseEvent) {
    console.log(1);
    let composedStyle = Object.assign({},
      child.props.style,
      props.afterEnter
    );
    setStyle(composedStyle);
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