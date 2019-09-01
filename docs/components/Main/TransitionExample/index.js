import Transition from "../../../../src/Transition";
import React from "react";

const TransitionExample = () => {
  return (
    <div>
      <Transition before={{
        marginLeft: '10px'
      }} after={{
        marginLeft: '-10px'
      }}/>
    </div>
  )
};
export default TransitionExample;