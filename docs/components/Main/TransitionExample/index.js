import Transition from "../../../../src/Transition";
import Button from "../../../../src/Button";
import React, {useState} from "react";

const TransitionExample = () => {

  const [isVisible, setVisible] = useState(false)
  return (
    <div>
      <button onClick={() => setVisible(!isVisible)}>hi</button>
      <Transition
        visible={isVisible}
        beforeEnter={{
          marginLeft: '10px',
          color: 'red'
        }}
        afterEnter={{
          color: 'red',
          marginLeft: '100px'
        }}
        enterActive={{
          transition: 'all 1s',
        }}
      >
        <Button>Hello</Button>
      </Transition>
    </div>
  )
};
export default TransitionExample;