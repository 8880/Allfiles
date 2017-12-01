import React from 'react';
import ReactDOM from 'react-dom';

import {createStore, combineReducers} from "redux";
import {Provider, connect} from "react-redux";

import login from "./reducers/login.js";

import {BrowserRouter as Router,Route} from 'react-router-dom';

import createBrowserHistory from "history/createBrowserHistory";

import App from './App';
import "./index.scss";

const store = createStore(combineReducers({login}));
const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
  <Router history={history}>
    <Route path="/" component={App}></Route>
  </Router>
</Provider>, document.getElementById('root'));
