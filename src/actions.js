export const
	GET_LIST_IPHONE = 'GET_LIST_IPHONE',
	GET_LIST_IPAD = 'GET_LIST_IPAD',
	GET_LIST_TOP = 'GET_LIST_TOP';

export function getIphone(iphone) {
	return {
		type: GET_LIST_IPHONE,
		iphone
	}
}

export function getIpad(ipad) {
	return {
		type: GET_LIST_IPAD,
		ipad
	}
}

export function getTop(list) {
	return {
		type: GET_LIST_TOP,
		list
	}
}