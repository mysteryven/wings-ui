import Transition from "../../src/Transition";
import Button from "../../src/Button";
import React, { useState } from "react";

export default {
  title: "Transition",
  component: Transition
};

export const Something = () => {
  return <div>适用于为那些刚加入 DOM 或者从 DOM 移除时添加过渡效果。</div>;
};

export const TransitionExample = () => {
  const [isVisible, setVisible] = useState(true);
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "8px"
        }}
      >
        <Button
          theme="primary"
          disabled={isVisible === true}
          onClick={() => setVisible(true)}
        >
          开始动画
        </Button>
        <Button
          theme="warning"
          disabled={isVisible === false}
          onClick={() => setVisible(false)}
        >
          结束动画
        </Button>
      </div>
      <hr />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Transition
          visible={isVisible}
          beforeEnter={{
            transform: "translateX(10px)",
            opacity: 0
          }}
          afterEnter={{
            fontSize: "24px",
            opacity: "1"
          }}
          enterActive={{
            transition: "all 1s"
          }}
          beforeLeave={{
            marginLeft: "10px"
          }}
          afterLeave={{
            transform: "translateX(10px)",
            opacity: 0
          }}
          leaveActive={{
            transition: "all 0.4s"
          }}
        >
          <div>Hello World</div>
        </Transition>
      </div>
    </div>
  );
};
