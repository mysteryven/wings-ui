import Transition from "../../src/Transition";
import Button from "../../src/Button";
import React, { useState } from "react";

export default {
  title: 'Transition',
  component: Transition,
};

export const TransitionExample = () => {
  const [isVisible, setVisible] = useState(true)
  return (
    <div>
      <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: '8px'
      }}>
        <Button theme="primary" disabled={isVisible === true} onClick={() => setVisible(true)}>开始动画</Button>
        <Button theme="warning" disabled={isVisible === false} onClick={() => setVisible(false)}>结束动画</Button>
      </div>
      <hr />
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>

        <Transition
          visible={isVisible}
          beforeEnter={{
            fontSize: '16px',
            opacity: 0
          }}
          afterEnter={{
            fontSize: '24px',
            opacity: '1'
          }}
          enterActive={{
            transition: 'all 1s'
          }}
          beforeLeave={{
            marginLeft: '10px',
          }}
          afterLeave={{
            color: 'red',
            marginLeft: '100px'
          }}
          leaveActive={{
            transition: 'all 0.4s',
          }}
        >
          <div>Hello World</div>
        </Transition>
      </div>
    </div>
  )
};
