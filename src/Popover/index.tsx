import React, { useRef, useState, useEffect, RefObject } from 'react';
import sc from '../utils/classname'
import './index.scss';
import { CSSProperties } from 'react';
import * as ReactDOM from 'react-dom';

interface PopoverProps {
  content: React.ReactNode | string;
  type?: 'shortPress' | 'longPress';
  interval?: number;
  position?: 'top' | 'bottom';
}

type PositionItem = string | number;

interface Position {
  'top': {
    left: PositionItem,
    bottom: PositionItem
  },
  'bottom': {
    left: PositionItem,
    top: PositionItem
  }
}

let timer: any = null;

const Popover: React.FC<PopoverProps> = (props) => {
  const triggerEl = useRef<null | HTMLDivElement>(null);
  const contentEl = useRef<null | HTMLDivElement>(null);
  const [offset, setOffset] = useState<CSSProperties>({});
  const [hasSetOffset, setOffsetStatus] = useState<boolean>(false);
  const [isVisible, setVisible] = useState<boolean>(false);
  const [shouldRender, setShouldRender] = useState<boolean>(false);
  const position = props.position || 'top';

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
      let { left, top, width, height, bottom } = triggerEl.current.getBoundingClientRect();
      let { width: contentWidth } = contentEl.current.getBoundingClientRect();

      let positions: Position = {
        top: {
          left: left + window.scrollX - (contentWidth - width) / 2,
          bottom: document.documentElement.scrollHeight - top + 8
        },
        bottom: {
          left: left + window.scrollX - (contentWidth - width) / 2,
          top: bottom + window.scrollY 
        } 
      }

      setOffset(positions[position]);
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

  return (
    <div className="w-popover">
      {
        shouldRender && ReactDOM.createPortal(
          <div 
            className={sc("w-popover-content", `w-popover-content-${position}`)} ref={contentEl} style={{
            ...offset,
            visibility: hasSetOffset ? 'visible' : 'hidden'
          }}>
            {props.content}
          </div>
          , document.body)
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
  position: 'top',
}

export default Popover;