import React from 'react';
import * as ReactDOM from 'react-dom';

console.log(React);

const Mobile = () => {
  return (
    <div>Hi</div>

  )
}

console.log(document.getElementById('#root'));
console.log('hihihi')

ReactDOM.render(<Mobile />, document.getElementById('root'));









// import { HashRouter } from "react-router-dom";
// import Intro from '../Main/Introduction';
// import ButtonExample from '../Main/ButtonExample';
// import TransitionExample from '../Main/TransitionExample';
// import popupExample from '../Main/PopupExample';

   // <HashRouter>
   //   <Route path="/" component={Intro} exact />
    //   <Route path="/button" component={ButtonExample} />
    //   <Route path="/transition" component={TransitionExample} />
    //   <Route path="/popup" component={popupExample} />
    // </HashRouter>