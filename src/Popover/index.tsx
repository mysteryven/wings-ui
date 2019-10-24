import React, { useRef, useState, useEffect, RefObject } from 'react';
import './index.scss';
import { EventType } from '@testing-library/dom';

interface PopoverProps {
  content: React.ReactNode | string;
}

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
    }
  })

  useEffect(() => {
    setShouldRender(isVisible);
    !isVisible && document.removeEventListener('click', onDocumentClick);
  }, [isVisible])

  function onDocumentClick(e: any) {
    if (isInner(contentEl)) {
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
      <div className="w-popover-trigger" ref={triggerEl} onClick={() => setVisible(!isVisible)}>
        {props.children}
      </div>
    </div>
  )
}

export default Popover;