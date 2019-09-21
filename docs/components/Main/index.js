import React from "react";
import { Route } from "react-router-dom";
import Pane from '../Pane';
import button from './ButtonExample/button.md'
import introduction from './Introduction/intro.md'
import transition from './TransitionExample/transition.md'
import popup from './PopupExample/popup.md'

const Main = (props) => {
  return (
    <div className={"w-main"}>
      <RouteWithMd path="/" md={introduction} exact />
      <RouteWithMd path="/button" md={button} />
      <RouteWithMd path="/transition" md={transition} />
      <RouteWithMd path="/popup" md={popup} />
    </div>
  )
};

export default Main;

function RouteWithMd(props) {
  const { path, md, ...restProps } = props;
  const component = () => (
    <div>
      {props.md.split('<p>{||}</p>').map(i => <Pane key={i} content={i} />)}
    </div>
  )

  return (
    <Route path={props.path} component={component} {...restProps} />
  )
}