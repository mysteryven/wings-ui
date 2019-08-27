import React from 'react';
import '../index.scss';
import Aside from "../Aside";
import Main from "../Main";
import MobileView from "../MobileView";
import {HashRouter} from "react-router-dom";

const App = () => {
  return (
    <div>
      <div className={"w-header"}>
      </div>
      <div className={"w-container"}>
        <HashRouter>
          <Aside/>
          <Main/>
          <MobileView/>
        </HashRouter>
      </div>
    </div>
  )
};

export default App;

