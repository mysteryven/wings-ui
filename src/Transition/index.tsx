import * as React from 'react';
import { useState, useEffect, useRef, EventHandler } from 'react';
import { CSSProperties, FunctionComponent } from 'react';
import sc from '../utils/classname';
import { pipe } from '../utils/fp';
import './index.scss';

interface TransitionProps {
  interval?: number;
  beforeEnter?: CSSProperties;
  afterEnter?: CSSProperties;
  beforeLeave?: CSSProperties;
  afterLeave?: CSSProperties;
  visible: boolean;
  className?: string;
}

const Transition: FunctionComponent<TransitionProps> = (props) => {
  const divEl = useRef<null | HTMLDivElement>(null);
  const [prevStyle, saveStyle] = useState<CSSProperties>({});
  const childRef = useRef<null | HTMLElement>(null);
  const [composedStyle, setStyle] = useState<CSSProperties>({});
  const [shouldRender, setShouldRender] = useState<boolean>(false);
  const [hasRendered, setHasRendered] = useState<boolean>(false);

  const child = React.Children.only(props.children) as React.ReactElement;

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
    let prev = {}
    if (typeof child.props.style === 'object') {
      prev = JSON.parse(JSON.stringify(child.props.style));
    }
    const { visible, beforeEnter, beforeLeave } = props;
    const presetStyle = productStyle(
      prev,
      visible ? beforeEnter : beforeLeave
    );

    const rePaintDiv = rePainter(divEl.current as HTMLDivElement);

    const beforeStyleSetter = pipe(presetStyle, setStyle);
    beforeStyleSetter()
    rePaintDiv();

    let timer1: any = null;
    let timer2: any = null;
    timer1 = setTimeout(() => {
      beforeStyleSetter(visible ?
        { ...{ transition: `all ${props.interval}ms` }, ...props.afterEnter } :
        { ...{ transition: `all ${props.interval}ms` }, ...props.afterLeave }
      );

      if (childRef && childRef.current) {
        timer2 = setTimeout(() => {
          if (visible) {
            setStyle(prevStyle);
          } else {
            setHasRendered(false);
            setShouldRender(false);
          }

        }, props.interval)
      }
    }, 0)
    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
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

Transition.defaultProps = {
  visible: false,
  interval: 500
}

