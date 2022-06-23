import ApiConstants from '../ApiConstants'
import api from './index'

export const getCategoryByRole = () => {
    return api(ApiConstants.CATEGORY_BY_ROLE, null, 'get')
}
