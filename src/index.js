import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import App from './App/Store/App';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, browserHistory } from 'react-router';
import {createStore} from 'redux';
import getApp from './reducers'
import {initialState} from './data'
import {Provider} from 'react-redux'

let
	store = createStore(getApp, initialState);

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={App} />
		</Router>
	</Provider>,
	document.getElementById('root'));
registerServiceWorker();
