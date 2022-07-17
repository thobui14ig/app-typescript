import ApiConstants from '../ApiConstants'
import api from './index'

export const getAllDanhmuc = async() => {
    return api(ApiConstants.DANHMUC);
    
}