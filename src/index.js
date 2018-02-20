import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import Root from './components/root.js';
import reducers from './reducers';

/*
import App from './components/app';
import { Provider } from 'react-redux';
*/

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Root store={createStoreWithMiddleware(reducers)}></Root>
  , document.querySelector('#root'));
