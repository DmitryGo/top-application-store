export const
	GET_LIST_IPHONE = 'GET_LIST_IPHONE',
	GET_LIST_IPAD = 'GET_LIST_IPAD';

export function getIphone(index) {
	return {
		type: GET_LIST_IPHONE,
		index
	}
}

export function getIpad(index) {
	return {
		type: GET_LIST_IPAD,
		index
	}
}