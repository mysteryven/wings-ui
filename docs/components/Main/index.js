import React from "react";
import { Route } from "react-router-dom";
import Pane from '../Pane';
import button from './ButtonExample/button.md'

const Main = (props) => {
  return (
    <div className={"w-main"}>
       <RouteWithMd path="/button" md={button} /> 
    </div>
  )
};

export default Main;

function RouteWithMd(props) {
  const component = () => (
    <div>
      { props.md.split('<p>{||}</p>').map(i => <Pane key={i} content={i} />)}
    </div>
  )

  return (
    <Route path={props.path} component={component} />
  )
}