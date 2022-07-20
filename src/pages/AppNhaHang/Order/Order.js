import { Button } from 'devextreme-react';
import DataGrid, {
  Column,
  Editing, Form as FormEdit, Label, Paging, Popup, RequiredRule, Summary, TotalItem
} from 'devextreme-react/data-grid';
import { Form, Item } from 'devextreme-react/form';
import 'devextreme-react/text-area';
import CustomStore from 'devextreme/data/custom_store';
import DataSource from 'devextreme/data/data_source';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { createOrder, createProduct, CRUDOrder } from '../../../api/methods/order.method';
import { CRUDSanpham } from '../../../api/methods/sanpham.method';
import { useAppNhaHang } from '../../../context/appnhahang.context';
import './order.scss';
import Xuly from './Xuly';
const order = {
  sanphamId: '', soluong:''
}

const tongtien = (data) => {
  let total = 0;
  data.map(item => {
    total = total + (item.soluong * +item.sanpham.gia)
    
  })

  return total;
}
function Order() {
  const {setRender, render} = useAppNhaHang()

  const { id } = useParams();
  const datagridRef = useRef();
  const [sanpham, setSanpham] = useState(null)
  const [orderId, setOrderId] = useState(0)
  const [orderLenght, setLengthOrder] = useState(0)
  const [checkThanhtoan, setCheckthanhtoan] = useState(0)
  const [total, setTotal] = useState(1)


  useEffect(() => {
    const fetch = async() => {
      const data = await CRUDSanpham('GET');
      setSanpham(data)
    }
    fetch()
  }, []);

  //mỗi khi vào chi tiết bàn thì kiểm tra nếu bàn đã order thì trả vè idOrder
  //ngược lại nếu chưa order thì tạo cho nó 1 order mới
  useEffect(() => {
    const addOrder = async() => {
      const orderIdReturn = await createOrder("POST",{
        banId: id
      })
      setOrderId(orderIdReturn)
    }

    addOrder()

  }, []);

  const newSanpham = new DataSource({
    store: {
      type: "array",
      key: "name",
      data: sanpham
    }
  })

  const ordersData = new CustomStore({
      key: 'id',
      load: () => sendRequest(),

      update: (key, values) => sendRequest( 'PUT', {
        key,
        values: values,
      }),
      remove: (key) => sendRequest('DELETE', {
        key,
      }),
  })

  const sendRequest = async(method = 'GET', data = {}) => {
     
      if (method === 'GET') {
          const data = await CRUDOrder(method, null, id)
          setCheckthanhtoan(data[0]?.isThanhtoan)
          setLengthOrder(data[0]?.orderDetails.length)
          const totalReturn = tongtien(data[0]?.orderDetails)
          setTotal(totalReturn)


          return data[0]?.orderDetails
      }
      if (data) {
        return CRUDOrder(method, data)
       
      }
  }

  const themmonan = async() => {
    await createProduct('post', {
      ...order, orderId: orderId
    }, id)
    datagridRef.current.instance.refresh(); 
    setRender(!render)
  }

  const thanhtien = (data) => {
    const { sanpham, soluong } = data.data;
    // setTotal(total * (sanpham?.gia * soluong))
    return sanpham?.gia * soluong
  }



  return (
      <>
          <h1 style={{ fontSize: "20px", fontWeight: 'bold', marginBottom: 10 }}>Bàn số: {id}</h1>
        
          <Form formData={order}>
                <Item caption={""} editorType={"dxSelectBox"} dataField="sanphamId" editorOptions={{dataSource: newSanpham, searchEnabled: true, displayExpr: "name", valueExpr: 'id', searchMode: 'contains'}}>
                  <Label text={'Tên sản phẩm'}></Label>
                </Item>
                <Item caption={""}  editorType={"dxNumberBox"} dataField="soluong" >
                  <Label text={'Số lượng'}></Label>
                </Item>

          </Form> 
          

          <Button
                  width={120}
                  text="Thêm"
                  type="danger"
                  stylingMode="contained"
                  onClick={() => themmonan()}
            />
            <DataGrid
                dataSource={ordersData}
                focusedRowEnabled={true}
                showBorders={true}
                width={"100%"}
                ref={datagridRef}
            >
                <Paging enabled={true} />
                <Paging/>

                <Editing
                    allowUpdating={true}
                    allowDeleting={true}
                >
                    <Popup title="Thêm sản phẩm" showTitle={true} width={700} height={525} />
                    <FormEdit>
                        <Item itemType="group" colCount={2} colSpan={2}>
                            <Item dataField="soluong" />
                        </Item>
                    </FormEdit>
                </Editing>
                <Column caption={"Tên sản phẩm"}  dataField="sanpham.name">
                    <RequiredRule/>
                </Column>

                <Column caption={"Số lượng"}  dataField="soluong"></Column>
                <Column caption={"Gía"}  dataField="sanpham.gia"></Column>
                <Column caption={"Đơn vi"}  dataField="sanpham.donvi"></Column>

                <Column caption={"Thành tiền"} dataField={"thanhtien"} cellRender={thanhtien}></Column>
               
            </DataGrid>
            <div style={{ fontSize: "20", fontWeight: "bold", marginTop: 20,marginBottom: 20, }}>Tổng tiền: {total.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</div>
            <Xuly
              orderId={orderId} 
              orderLenght={orderLenght}
              thanhtoanReturn={checkThanhtoan}
              total={total}
            />



      </>
  )
}

export default Order