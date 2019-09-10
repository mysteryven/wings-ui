import * as React from 'react';

interface PopupProps {
 visible?: boolean;
}

const Popup: React.FunctionComponent<PopupProps> = (props) => {
  return (
    <div>{props.children}</div>
  );
};

export default Popup;