import ApiConstants from '../ApiConstants'
import api from './index'

export const getDoanhthuthang = async(n) => {
    console.log(ApiConstants.HOAN_THANH + `/doanhthuthang/${n}`)
    return api(ApiConstants.HOAN_THANH + `/doanhthuthang/${n}`);
    
}

export const getDoanhthutuan = async(start, end) => {
    return api(ApiConstants.HOAN_THANH + `/doanhthutuan/${start}/${end}`);
    
}