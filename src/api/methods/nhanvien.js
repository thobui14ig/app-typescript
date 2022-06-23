import ApiConstants from '../ApiConstants'
import api from './index'

const getUser = () => {
    return api(ApiConstants.GET_USER, null, 'get')
}

export default getUser


export const CRUDNhanvien = async(method, data = null, startDate = null, endDate = null) => {
    switch(method){
      case "GET":
        return api(ApiConstants.USER  + `?filter=createAt||$between||${startDate},${endDate}`, null, method);
        // console.log("==", startDate);
        // console.log("==", endDate);
  
        // return Api(ApiConstants.USER, null, method, null);
        
  
      case "POST":
        return api(ApiConstants.USER, data.values, method)
        
  
      case "PATCH":
        return api(ApiConstants.USER + '/' + data.key, data.values, method)
  
      case "DELETE":
          return api(ApiConstants.USER + '/' + data.key, null, method)
         
        default: return api(ApiConstants.USER, data.values, method)
    }
  
  
  
  
    
  }