import { Button } from 'devextreme-react';
import { Label } from 'devextreme-react/data-grid';
import { Form, Item } from 'devextreme-react/form';
import { nhapkho } from '../../../api/methods/kho.method';
import { useAppNhaHang } from '../../../context/appnhahang.context';

const sanpham = {
  sanphamId: '', soluong:''
}
function Nhapkho() {
  const { newSanpham } = useAppNhaHang()
  const themmonan = async() => {
    await nhapkho(sanpham)
  }
  return (
    <>
      <Form formData={sanpham}>
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
    </>
 
  
  )
}

export default Nhapkho