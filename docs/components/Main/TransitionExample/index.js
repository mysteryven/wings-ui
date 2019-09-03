import Transition from "../../../../src/Transition";
import React from "react";

const TransitionExample = () => {
  return (
    <div>
      <Transition
        beforeEnter={{
        marginLeft: '10px',
      }}
        afterEnter={{
          color: 'red',
        marginLeft: '100px'
      }}
        enterActive={{
          transition: 'all 3s',
        }}

      >
        <div>2</div>
      </Transition>
    </div>
  )
};
export default TransitionExample;