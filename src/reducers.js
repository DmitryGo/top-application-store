import {combineReducers} from 'redux';
import {GET_LIST_IPHONE, GET_LIST_IPAD} from './actions';

const
	iphoneApp = (state = {}, action) => {
		switch(action.type) {
			case GET_LIST_IPHONE:
				return action.index;
			default:
				return state;
		}
	}

const
	ipadApp = (state = {}, action) => {
		switch(action.type) {
			case GET_LIST_IPAD:
				return action.index;
			default:
				return state;
		}
	}

const
	getApp = combineReducers({
		iphoneApp,
		ipadApp,
	})

export default getApp;
