import * as React from 'react';
import { Route } from "react-router-dom"
import ButtonExample from '../Main/ButtonExample';

const MobileView = () => {
  return (

    <div className={"w-mobile-view"}> 
      <Route path="/button" component={ButtonExample} />
    </div>
  )
};

export default MobileView;