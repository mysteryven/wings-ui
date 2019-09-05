import Transition from "../../../../src/Transition";
import React from "react";

const TransitionExample = () => {
  const [visible, setVisible] = useState(visible);
  return (
    <div>
      <button onClick={setVisible(prev => !prev)}>click</button>
      {
        visible && <Transition
          beforeLeave={{
            marginLeft: '10px',
          }}
          afterLeave={{
            color: 'red',
            marginLeft: '100px'
          }}
          leaveActive={{
            transition: 'all 3s',
          }}

        >
        </Transition>
      }
    </div>
  )
};
export default TransitionExample;