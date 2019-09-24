import React, { useEffect, useState } from 'react';
import hljs from 'highlight.js';
import { HashRouter } from "react-router-dom";
import '../index.scss';
import Aside from "../Aside";
import Main from "../Main";
import MobileView from "../MobileView";

const App = () => {
  const [routerName, setRouterName] = useState();
  useEffect(() => {
    hljs.initHighlightingOnLoad();
    document.querySelectorAll("pre code").forEach(block => {
      hljs.highlightBlock(block);
    });
  }, [])



  function onChangePageRouter(name) {
    setRouterName(name)
  }

  return (
    <div>
      <div className={"w-header"}>
      </div>
      <div className={"w-container"}>
        <HashRouter>
          <Aside onChangeRouter={onChangePageRouter} />
          <Main />
          <MobileView routerName={routerName} />
        </HashRouter>
      </div>
    </div>
  )
};

export default App;

