import ApiConstants from '../ApiConstants'
import api from './index'

export const login = (email, password) => {
    return api(ApiConstants.LOGIN, {email: email, password: password}, 'post')
}

