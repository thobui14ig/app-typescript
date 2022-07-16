import DataGrid, {
    Column,
    Editing, Form, Paging, Popup, RequiredRule
} from 'devextreme-react/data-grid';
import { Item } from 'devextreme-react/form';
import 'devextreme-react/text-area';
import { FilterRow } from 'devextreme-react/tree-list';
import CustomStore from 'devextreme/data/custom_store';
import { CRUDDanhmuc } from '../../../api/methods/danhmuc.method';

function DanhMuc() {
    const ordersData = new CustomStore({
        key: 'id',
        load: () => sendRequest(),
        insert: (values) => sendRequest( 'POST', {
          values: JSON.stringify(values),
        }),
        update: (key, values) => sendRequest( 'PUT', {
          key,
          values: JSON.stringify(values),
        }),
        remove: (key) => sendRequest('DELETE', {
          key,
        }),
      })

      const sendRequest = async(method = 'GET', data = {}) => {
        if (method === 'GET') {
         return CRUDDanhmuc(method)
        }
    
        if (data) {
          console.log(data);
          return CRUDDanhmuc(method, data)
         
        }
      }
    return (
        <>
            <DataGrid
                dataSource={ordersData}
                focusedRowEnabled={true}
                showBorders={true}
                width={"100%"}
            >
                <Paging enabled={true} />
                <FilterRow visible={true} />
                <Paging/>

                <Editing
                    mode="popup"
                    allowUpdating={true}
                    allowAdding={true}
                    allowDeleting={true}
                >
                    <Popup title="Thêm sản phẩm" showTitle={true} width={700} height={525} />
                    <Form>
                        <Item itemType="group" colCount={2} colSpan={2}>
                            <Item dataField="name" />

                        </Item>

                    </Form>

                </Editing>
                <Column caption={"Tên danh mục"}  dataField="name">
                    <RequiredRule/>
                </Column>
              
            </DataGrid>

        </>
    )
}

export default DanhMuc