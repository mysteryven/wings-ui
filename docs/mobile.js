import React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter, Route } from "react-router-dom";
import Intro from './components/Main/Introduction';
import ButtonExample from './components/Main/ButtonExample';
import TransitionExample from './components/Main/TransitionExample';
import PopupExample from './components/Main/PopupExample';
import GridExample from './components/Main/GridExample';
import FormExample from './components/Main/FormExample';
import MessageExample from './components/Main/MessageExample';
import PlayerExample from './components/Main/PlayerExample';

import PopoverExample from './components/Main/PopoverExample';

const Mobile = () => {
  return (
    <HashRouter>
      <Route path="/" component={Intro} exact />
      <Route path="/button" component={ButtonExample} />
      <Route path="/transition" component={TransitionExample} />
      <Route path="/popup" component={PopupExample} />
      <Route path="/grid" component={GridExample} />
      <Route path="/form" component={FormExample} />
      <Route path="/message" component={MessageExample} />
      <Route path="/player" component={PlayerExample} />
      <Route path="/popover" component={PopoverExample} />
    </HashRouter>
  )
};

ReactDOM.render(<Mobile />, document.getElementById('root'));











