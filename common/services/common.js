import request from '../../uview-ui/libs/request/index.js'


export function handleService(url, data, method = 'get') {
	return request[method](url, data)
}