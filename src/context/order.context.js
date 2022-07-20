import React, { useContext, useEffect, useState } from 'react';
import { getDoanhThuNgay } from '../api/methods/order.method';
export const OrderContext = React.createContext({})

const OrderProvider = ({ children }) => {
    const [danhthu, setDoanhthungay] = useState(0)

    useEffect(() => {
      const fetch = async() => {
        const dataDoanhthungay = await getDoanhThuNgay()
        setDoanhthungay(dataDoanhthungay)
      }
      fetch()

    }, []);

    return (
      <OrderContext.Provider value={{danhthu}}>
          {children}
      </OrderContext.Provider>
    );
  };



export default OrderProvider


export const useOrder = () => {
    return useContext(OrderContext);
}


