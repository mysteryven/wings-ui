import React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter, Route } from "react-router-dom";
import Intro from './components/Main/Introduction';
import ButtonExample from './components/Main/ButtonExample';
import TransitionExample from './components/Main/TransitionExample';
import PopupExample from './components/Main/PopupExample';
import GridExample from './components/Main/GridExample';

const Mobile = () => {
  return (
    <HashRouter>
      <Route path="/" component={Intro} exact />
      <Route path="/button" component={ButtonExample} />
      <Route path="/transition" component={TransitionExample} />
      <Route path="/popup" component={PopupExample} />
      <Route path="/grid" component={GridExample} />
    </HashRouter>
  )
};

ReactDOM.render(<Mobile />, document.getElementById('root'));











