import api from "."
import ApiConstants from "../ApiConstants"

export const nhapkho = (sanpham: any) => {
    return api(ApiConstants.KHO +  `/nhapkho/${sanpham.sanphamId}`, {soluong: sanpham.soluong}, 'POST')
}