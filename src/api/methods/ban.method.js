import ApiConstants from '../ApiConstants'
import api from './index'

export const getAllBan = async() => {
    return api(ApiConstants.BAN + '?join=order&join=order.orderDetails');
    
}