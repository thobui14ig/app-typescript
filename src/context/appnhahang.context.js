import DataSource from 'devextreme/data/data_source';
import React, { useContext, useEffect, useState } from 'react';
import { getAllBan } from '../api/methods/ban.method';
import { CRUDSanpham } from '../api/methods/sanpham.method';
export const AppNhaHangContext = React.createContext({})
const getBandanghoatdong = (data) => {
  let total = 0;
  data.map((item) => {
    if(item?.order !== null){
      if(item?.order?.orderDetails.length > 0){
        total++
      } 
    }
    
  })
  return total;
}
const AppNhaHangProvider = ({ children }) => {
  const [ban, setBan] = useState(null);
    const [banHoatDong, setBanHoatDong] = useState(0)
    const [render, setRender] = useState(false)
    const [sanpham, setSanpham] = useState(null)


    useEffect(() => {
      console.log(123213)
      const fetch = async() => {
        const data = await getAllBan();
        setBan(data)
        const soBandanghoatdong = getBandanghoatdong(data)
        setBanHoatDong(soBandanghoatdong)
      }
      fetch();
    }, [render]);
    
    useEffect(() => {
      const fetch = async() => {
        const data = await CRUDSanpham('GET');
        setSanpham(data)
      }
      fetch()
    }, []);

    const newSanpham = new DataSource({
      store: {
        type: "array",
        key: "name",
        data: sanpham
      }
    })
    return (
      <AppNhaHangContext.Provider value={{ban, banHoatDong, setBanHoatDong,render, setRender, newSanpham}}>
          {children}
      </AppNhaHangContext.Provider>
    );
  };



export default AppNhaHangProvider


export const useAppNhaHang = () => {
    return useContext(AppNhaHangContext);
}


