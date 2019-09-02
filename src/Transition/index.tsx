import * as React from "react";
import { useState, useEffect, useRef } from 'react'
import { CSSProperties, FunctionComponent } from "react";
import './index.scss';

interface TransitionProps {
  before?: CSSProperties;
  after?: CSSProperties
}

const Transition: FunctionComponent<TransitionProps> = (props) => {
  const divEl = useRef<null | HTMLDivElement>(null);
  const [isDisplay, setDisplay] = useState<'none' | 'block'>('none');
  useEffect(() => {
    setDisplay('block');
    if (divEl) {
      divEl.current.getBoundingClientRect()
    }
    const child = React.Children.only(props.children);
    const style = [child.props.style, { opacity: 0 }];
    React.cloneElement(
      props.children, {

      }
    )
  })

  return (
    <div
      className={"w-transition"}
      style={{ display: isDisplay }}
      ref={divEl}
    >
      {props.children}
    </div>
  )
};

export default Transition;