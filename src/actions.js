export const
	GET_LIST_IPHONE = 'GET_LIST_IPHONE',
	GET_LIST_IPAD = 'GET_LIST_IPAD';

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