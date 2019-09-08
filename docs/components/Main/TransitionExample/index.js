import Transition from "../../../../src/Transition";
import React, {useState} from "react";

const TransitionExample = () => {
<<<<<<< HEAD
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
=======
    const [isVisible, setVisible] = useState(true)
    return (
      <div>
        <button onClick={() => setVisible(!isVisible)}>hi</button>
          <Transition
            visible={isVisible}
            beforeEnter={{
              marginLeft: '10px',
            }}
            afterEnter={{
              color: 'red',
              marginLeft: '100px'
            }}
            enterActive={{
              transition: 'all 1s',
            }}

            beforeLeave={{
              marginLeft: '10px',
            }}
            afterLeave={{
              color: 'red',
              marginLeft: '100px'
            }}
            leaveActive={{
              transition: 'all 1s',
            }}

          >
            <div>Hello</div>
          </Transition>
      </div>
    )
  }
;
>>>>>>> test
export default TransitionExample;