import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import App from './App/Store/App';
import Iphone from './App/Store/Iphone';
import Ipad from './App/Store/Ipad';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import {createStore} from 'redux';
import getApp from './reducers'
import {initialState} from './data'
import {Provider} from 'react-redux'

let
	store = createStore(getApp, initialState);

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={Iphone} />
				<Route path="iphone" component={Iphone} />
				<Route path="ipad" component={Ipad} />
			</Route>
		</Router>
	</Provider>,
	document.getElementById('root'));
registerServiceWorker();
