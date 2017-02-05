import React from 'react';
import { Route, IndexRoute, browserHistory } from 'react-router';
import Header from './components/common/Header';
import Board from './components/about/Board';
import Main from './components/main/Main';
import ManageBoard from './components/about/ManageBoard';

export default (
  <Route path="/" component={Header}>
    <IndexRoute component={Main}/>
    <Route path="main" component={Main}/>
    <Route path="board" component={Board}/>
    <Route path="write" component={ManageBoard}/>
    <Route path="about/:id" component={ManageBoard}/>
  </Route>
);


// export default class routes extends React.Component {
//   render(){
//     return (
//             <Route path="/" component={Header}>
//               <IndexRoute component={Main}/>
//               <Route path="main" component={Main}/>
//               <Route path="about" component={About}/>
//             </Route>
//           );
//         }
// }

// export default routes;
// ReactDOM.render(<App/>, rootElement);
