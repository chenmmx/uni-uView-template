import {handleService} from './common.js'

const prefix = '/SecurityHousingPark/v1/CompanyPerson'

const url = {
	getListByPage: prefix + '/GetListByPage'
}

export default {
	getListByPage(data) {
		return handleService(url.getListByPage, data)
	}
}