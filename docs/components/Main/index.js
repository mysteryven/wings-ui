import React from "react";
import { Route } from "react-router-dom";
import ButtonExample from './ButtonExample'

const Main = (props) => {
  return (
    <div className={"w-main"}>
       <Route path="/button" component={ButtonExample} /> 
    </div>
  )
};

export default Main;