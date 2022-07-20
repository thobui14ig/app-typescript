import React from 'react'
import { useAppNhaHang } from '../../../context/appnhahang.context'
import { useOrder } from '../../../context/order.context'

function OrderHeader() {
    const {danhthu} = useOrder()
    const {banHoatDong} = useAppNhaHang()
    return (
      <div>
          <h1 style={{ fontSize: "20px", fontWeight: 'bold', marginTop: 10, marginBottom: 10 }}>Doanh thu hôm nay: {danhthu.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</h1>
          <h1 style={{ fontSize: "20px", fontWeight: 'bold', marginTop: 10, marginBottom: 10 }}>Số bàn đang hoạt động: {banHoatDong}</h1>
      </div>
    )
}

export default OrderHeader