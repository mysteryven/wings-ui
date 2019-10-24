import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
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
  const childRef = useRef<null | HTMLElement>(null);
  const [composedStyle, setStyle] = useState<CSSProperties>({});
  const [shouldRender, setShouldRender] = useState<boolean>(false);
  const [hasRendered, setHasRendered] = useState<boolean>(false);
  const [step, setStep] = useState<1 | 2>(1);

  const child = React.Children.only(props.children) as React.ReactElement;

  useEffect(() => {
    if (divEl && divEl.current) {
      setHasRendered(true)
    }
  })

  useEffect(() => {
    const { beforeEnter = {}, afterEnter = {} } = props;
    let prev = {}
    if (typeof child.props.style === 'object') {
      prev = JSON.parse(JSON.stringify(child.props.style));
    }

    if (props.visible) {
      setShouldRender(true);
      if (!hasRendered) {
        return
      }
      const a = beStyleStr(beforeEnter || {})
      if (divEl && divEl.current) {
        divEl.current.style.cssText = a;
        divEl && divEl.current && divEl.current.getBoundingClientRect();

        const interval = props.interval || 400
        const b = beStyleStr(afterEnter || {}, {
          transition: `all ${interval}ms`
        })
        divEl.current.style.cssText = b;
        setTimeout(() => {
          setStyle(prev);
        }, props.interval)
      }
    } else {

    }
  }, [props.visible, hasRendered])

  function beStyleStr(...arr: Array<CSSProperties>) {
    return arr.reduce((acc: string, cur: CSSProperties) => {
      Object.keys(cur).forEach((key: keyof CSSProperties) => {
        acc += `${key}: ${cur[key]};`
      })
      return acc;
    }, '')
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

