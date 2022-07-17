import React, { useContext, useEffect, useState } from 'react';
import { getAllDanhmuc } from '../api/methods/sanhmuc.method';
export const SanPhamContext = React.createContext({})

const SanPhamProvider = ({ children }) => {
    const [danhmuc, setDanhmuc] = useState(null)

    useEffect(() => {
        const fetchData = async() => {
            const data = await getAllDanhmuc();
            setDanhmuc(data)
        }
        fetchData()
    }, []);


    return (
      <SanPhamContext.Provider value={{danhmuc}}>
          {children}
      </SanPhamContext.Provider>
    );
  };



export default SanPhamProvider


export const useSanPham = () => {
    return useContext(SanPhamContext);
}


