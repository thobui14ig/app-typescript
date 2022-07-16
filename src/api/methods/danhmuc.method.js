import ApiConstants from '../ApiConstants'
import api from './index'

export const CRUDDanhmuc = async(method, data = null) => {
    switch(method){
      case "GET":
        return api(ApiConstants.DANHMUC, null, method);
        // console.log("==", startDate);
        // console.log("==", endDate);
  
        // return Api(ApiConstants.USER, null, method, null);
        
  
    //   case "POST":
    //     return api(ApiConstants.USER, data.values, method)
        
  
    //   case "PATCH":
    //     return api(ApiConstants.USER + '/' + data.key, data.values, method)
  
    //   case "DELETE":
    //       return api(ApiConstants.USER + '/' + data.key, null, method)
         
        default: return api(ApiConstants.DANHMUC, data.values, method)
    }
  
  
  
  
    
  }
