import ApiConstants from '../ApiConstants'
import api from './index'

const apiGetVattu = () => {
    return api(ApiConstants.GET_VAT_TU, null, 'get')
}

export default apiGetVattu