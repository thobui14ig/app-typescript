import React from 'react'
import { useSanPham } from '../../../context/sanpham.context';
import Sanpham from './Sanpham';

function SanphamHOC() {
    const {danhmuc} = useSanPham();
    return (
        <>
            {danhmuc &&
                <Sanpham danhmuc={danhmuc}/>
            }        
        </>
    )
}

export default SanphamHOC