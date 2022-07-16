import ApiConstants from '../ApiConstants'
import api from './index'


export const createOrder = (method, data) => {
  return api(ApiConstants.ORDER + '/add', data, method);
}

export const createProduct = (method, data) => {
  return api(ApiConstants.ORDER_DETAILS, data, method);
}

export const CRUDOrder = async(method, data = null, id) => {
    switch(method){
      case "GET":
        return api(ApiConstants.ORDER + `?join=ban||name&join=orderDetails||sanphamId,soluong&join=orderDetails.sanpham||name,gia,donvi&filter=banId||$eq||${id}`, null, method);
        
      case "POST":
        return api(ApiConstants.ORDER_DETAILS, data.values, method)


      case "PUT":
        return api(ApiConstants.ORDER_DETAILS + '/' + data.key, data.values, "PUT")

      case "DELETE":
        return api(ApiConstants.ORDER_DETAILS + '/' + data.key, null, method)

        
        default: return api(ApiConstants.DANHMUC, data.values, method)
  }
}

