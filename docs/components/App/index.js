import React from 'react';
import '../index.scss';
import Aside from "../Aside";
import Main from "../Main";
import MobileView from "../MobileView";

const App = () => {
  return (
    <div>
      <div className={"w-header"}>
      </div>
      <div className={"w-container"}>
        <Aside/>
        <Main/>
        <MobileView/>
      </div>
    </div>
  )
};

export default App;

