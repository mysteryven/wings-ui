import React, { useRef, useState, useEffect, RefObject } from 'react';
import './index.scss';

interface PopoverProps {
  content: React.ReactNode | string;
  type?: 'shortPress' | 'longPress';
  interval?: number;
}

let timer: any = null;

const Popover: React.FC<PopoverProps> = (props) => {
  const triggerEl = useRef<null | HTMLDivElement>(null);
  const contentEl = useRef<null | HTMLDivElement>(null);
  const [offsetX, setOffsetX] = useState<number>(0);
  const [hasSetOffset, setOffsetStatus] = useState<boolean>(false);
  const [isVisible, setVisible] = useState<boolean>(false);
  const [shouldRender, setShouldRender] = useState<boolean>(false);

  useEffect(() => {
    if (isVisible) {
      setShouldRender(true)
    } else {
      setShouldRender(false);
      setOffsetStatus(false)
      document.removeEventListener('click', onDocumentClick);
    }
  }, [isVisible])

  useEffect(() => {
    if (triggerEl && triggerEl.current && contentEl && contentEl.current) {
      setOffsetX(( getWidth(triggerEl) - getWidth(contentEl)) / 2)
      setOffsetStatus(true);
      document.addEventListener('click', onDocumentClick)
    }

    return () => {
      document.removeEventListener('click', onDocumentClick);
      clearTimeout(timer);
    }
  }, [shouldRender])

  function onTriggerClick() {
    props.type !== "longPress" && setVisible(!isVisible)
  }

  function onTriggerTouchStart() {
    props.type === "longPress" && count(props.interval || 300);
  }

  function count(time: number) {
    time < 0
      ? setVisible(true)
      : timer = setTimeout(count.bind(undefined, time - 100), 100);
  }

  function onTriggerTouchEnd() {
    props.type === 'longPress' && clearTimeout(timer);
  }

  function onDocumentClick(e: any) {
    if (
      isInner(contentEl) ||
      props.type === "longPress" && isInner(triggerEl)
    ) {
      return;
    }

    setVisible(false);

    function isInner(el: RefObject<HTMLDivElement>) {
      return el && el.current && el.current.contains(e.target)
    }
  }

  function getWidth(el: RefObject<HTMLDivElement>) {
    if (el && el.current) {
      return Number.parseFloat(window.getComputedStyle(el.current).width as string);
    }
    return 0;
  }

  return (
    <div className="w-popover">
      {
        shouldRender && (
          <div className="w-popover-content" ref={contentEl} style={{
            left: offsetX,
            visibility: hasSetOffset ? 'visible' : 'hidden'
          }}>
            {props.content}
          </div>
        )
      }
      <div
        className="w-popover-trigger"
        ref={triggerEl}
        onClick={onTriggerClick}
        onMouseDown={onTriggerTouchStart}
        onTouchStart={onTriggerTouchStart}
        onTouchEnd={onTriggerTouchEnd}
        onMouseUp={onTriggerTouchEnd}
      >
        {props.children}
      </div>
    </div>
  )
}

Popover.defaultProps = {
  interval: 300,
  type: 'shortPress',
}

export default Popover;