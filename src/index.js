
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import { Router,  browserHistory} from 'react-router';
import { Provider  } from 'react-redux';
import routes from './routes';
import configStore from './store';
import {loadBoard} from './actions/boardActions';

const store = configStore();
store.dispatch(loadBoard());

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root'));

// ReactDOM.render(<App/>, rootElement);
