import * as React from "react";
import { useState, useEffect, useRef } from 'react'
import { CSSProperties, FunctionComponent } from "react";
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

      let activeStyle = Object.assign({
          display: 'none'
        },
        child.props.style,
        props.enterActive
      );
      setStyle(activeStyle);
      div.getBoundingClientRect();
      let composedStyle = Object.assign(
        activeStyle,
        { display: 'block' },
        props.beforeEnter
      );
      console.log(composedStyle)
      setStyle(composedStyle);

      div.getBoundingClientRect();
      setStyle({...activeStyle, display: 'block'});
      if (childRef && childRef.current) {
        setTransitionStatus(false);
        childRef.current.addEventListener('transitionend', handleTransitionEnd);
      }

    }


  }, []);

  function handleTransitionEnd(e: MouseEvent) {
    console.log(1);
    let composedStyle = Object.assign({},
      child.props.style,
      props.afterEnter
    );
    console.log(composedStyle)
    setStyle(composedStyle);
    setTransitionStatus(true);
    setHasTransition(true);

  }

  useEffect(()=>{
    if (isTransitionEnd && hasTransitionEnd) {
      document.removeEventListener('transitionend', handleTransitionEnd)
      setStyle(prevStyle);
    }

  }, [isTransitionEnd, hasTransitionEnd])

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