import * as React from "react";
import {CSSProperties, FunctionComponent} from "react";

interface TransitionProps {
  before?: CSSProperties;
  after?: CSSProperties
}

const Transition: FunctionComponent<TransitionProps> = (props) => {

  return (
    <div className={"w-transition"}>
      hi
    </div>
  )
};

export default Transition;