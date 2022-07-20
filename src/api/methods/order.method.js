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


export const hoanthanhdonhang = async(data) => {
  //xóa dữ liệu bảng order_details
  await api(ApiConstants.ORDER_DETAILS + '/deleteOrder' , data, 'POST');
  //xóa dữ liệu bảng order
  await api(ApiConstants.ORDER + `/${data.orderId}`, null, 'DELETE');

  //insert dữ  liệu hoàn tất vào bảng hoàn tất
  return api(ApiConstants.HOAN_THANH, data, 'POST');
}

export const thanhtoan = (id) => {
  return api(ApiConstants.ORDER + `/${id}`, { isThanhtoan: 1 }, "PUT");
}

export const huy = (id) => {
  return api(ApiConstants.ORDER + `/${id}`, null, "DELETE");
}

export const getDoanhThuNgay = (id) => {
  return api(ApiConstants.HOAN_THANH + '/doanhthungay', null, "GET");
}





