import * as React from 'react';

const MobileView = (props) => {
  return (
    <div className={"w-mobile-view"}>
      <iframe
        width="100%"
        height="100%"
        frameBorder="none"
        src={`mobile.html#${props.routerName}`}
      >
      </iframe>
    </div>
  )
};

export default MobileView;