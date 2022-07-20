import React, { useContext, useEffect, useState } from 'react';
import { getAllBan } from '../api/methods/ban.method';
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

    return (
      <AppNhaHangContext.Provider value={{ban, banHoatDong, setBanHoatDong,render, setRender}}>
          {children}
      </AppNhaHangContext.Provider>
    );
  };



export default AppNhaHangProvider


export const useAppNhaHang = () => {
    return useContext(AppNhaHangContext);
}


