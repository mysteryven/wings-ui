import React, {useEffect} from 'react';
import hljs from 'highlight.js';
import {HashRouter} from "react-router-dom";
import '../index.scss';
import Aside from "../Aside";
import Main from "../Main";
import MobileView from "../MobileView";
import './code.scss'

const App = () => {
  useEffect(() => {
    document.querySelectorAll("pre code").forEach(block => {
      hljs.highlightBlock(block);
    });
  })

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

