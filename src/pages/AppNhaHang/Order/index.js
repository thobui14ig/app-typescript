import React from 'react'
import OrderProvider from '../../../context/order.context'
import Order from './Order'
import OrderHeader from './OrderHeader'

function OrderWraper() {
  return (
    <>
        <OrderProvider>
            <OrderHeader/>
            <Order/>            
        </OrderProvider>

    </>
  )
}

export default OrderWraper