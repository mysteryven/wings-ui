import React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter, Route } from "react-router-dom";
import Intro from './components/Main/Introduction';
import ButtonExample from './components/Main/ButtonExample';
import TransitionExample from './components/Main/TransitionExample';
import popupExample from './components/Main/PopupExample';

const Mobile = () => {
  return (
    <HashRouter>
      <Route path="/" component={Intro} exact />
      <Route path="/button" component={ButtonExample} />
      <Route path="/transition" component={TransitionExample} />
      <Route path="/popup" component={popupExample} />
    </HashRouter>
  )
};

ReactDOM.render(<Mobile />, document.getElementById('root'));











