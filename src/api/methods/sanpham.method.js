import ApiConstants from '../ApiConstants'
import api from './index'

export const CRUDSanpham = async(method, data = null, startDate = null, endDate = null) => {
    switch(method){
      case "GET":
        return api(ApiConstants.SANPHAM, null, method);
        // console.log("==", startDate);
        // console.log("==", endDate);
  
        // return Api(ApiConstants.USER, null, method, null);
        
  
    //   case "POST":
    //     return api(ApiConstants.USER, data.values, method)
        
  
    //   case "PATCH":
    //     return api(ApiConstants.USER + '/' + data.key, data.values, method)
  
    //   case "DELETE":
    //       return api(ApiConstants.USER + '/' + data.key, null, method)
         
        default: return api(ApiConstants.SANPHAM, data.values, method)
    }
  
  
  
  
    
  }


