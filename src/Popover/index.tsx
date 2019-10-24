import React, { useRef, useState, useEffect, RefObject } from 'react';
import './index.scss';
import { EventType } from '@testing-library/dom';

interface PopoverProps {
  content: React.ReactNode | string;
  type?: 'shortPress' | 'longPress';
}

let timer: any = null;
let current: number = 0;

const Popover: React.FC<PopoverProps> = (props) => {
  const triggerEl = useRef<null | HTMLDivElement>(null);
  const contentEl = useRef<null | HTMLDivElement>(null);
  const [offsetX, setOffsetX] = useState<number>(0);
  const [isVisible, setVisible] = useState<boolean>(false);
  const [shouldRender, setShouldRender] = useState<boolean>(false);

  useEffect(() => {
    if (triggerEl && triggerEl.current && contentEl && contentEl.current) {
      const triggerWidth = getWidth(triggerEl);
      const contentWidth = getWidth(contentEl);

      setOffsetX((triggerWidth - contentWidth) / 2)
      document.addEventListener('click', onDocumentClick)
    }

    return () => {
      document.removeEventListener('click', onDocumentClick);
      clearTimeout(timer);
      current = 0;
    }
  })

  useEffect(() => {
    setTimeout(()=> {
      setShouldRender(isVisible);
    })
    !isVisible && document.removeEventListener('click', onDocumentClick);
  }, [isVisible])

  function onTriggerClick() {
    props.type !== "longPress" && setVisible(!isVisible)
  }

  function onTriggerTouchStart() {
    if (props.type === "longPress") {
      count(3);
    }
  }

  function count(time: number) {
    if (time < 0) {
      setVisible(true)
    } else {
      timer = setTimeout(count.bind(undefined, time - 1), 100)
    }
  }

  function onTriggerTouchEnd() {
    if (props.type === 'longPress') {
      clearTimeout(timer);
      current = 0
    }
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
          <div className="w-popover-content" ref={contentEl} style={{ left: offsetX }}>
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

export default Popover;