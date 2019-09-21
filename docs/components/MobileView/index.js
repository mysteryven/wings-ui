import * as React from 'react';
import { Route } from "react-router-dom"

import Intro from '../Main/Introduction';
import ButtonExample from '../Main/ButtonExample';
import TransitionExample from '../Main/TransitionExample';
import popupExample from '../Main/PopupExample';

const MobileView = () => {
  return (
    <div className={"w-mobile-view"}>
      <Route path="/" component={Intro} exact />
      <Route path="/button" component={ButtonExample} />
      <Route path="/transition" component={TransitionExample} />
      <Route path="/popup" component={popupExample} />
    </div>
  )
};

export default MobileView;