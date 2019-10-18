import React, {ReactNode, useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

interface MessageProps {
  top?: number;
  duration: number;
  onClose: () => void;
  content?: string | React.ReactNode;
}

interface OptionProps {
  duration?: number;
  content?: string | React.ReactNode;
}

const Message: React.FC<MessageProps> = (props) => {
  const [visible, setVisible] = useState(true);

  let timer:any = null;

  useEffect(() => {
    timer = setTimeout(() => {
      setVisible(false);
      props.onClose();
    }, props.duration);

    return () => {
      clearTimeout(timer)
    }
  });

  const renderMessage:ReactNode = (
    visible && <div className='w-message-wrapper'>{props.content}</div>
  );
  return ReactDOM.createPortal(renderMessage, document.body);
};

const success = (params:OptionProps) => {
  const {
    duration = 1000,
    content
  } = params;

  const container:HTMLDivElement = document.createElement('div');
  document.body.append(container);

  const onCloseHandler = () => {
    ReactDOM.unmountComponentAtNode(container);
    container.remove();
  };

  const message = (
    <Message duration={duration} onClose={onCloseHandler} content={content} />
  );
  ReactDOM.render(message, container);
};

export {success};