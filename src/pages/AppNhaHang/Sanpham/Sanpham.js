import { Button } from 'devextreme-react';
import DataGrid, {
    Column,
    Editing, Form, Lookup, Paging, Popup, RequiredRule
} from 'devextreme-react/data-grid';
import { Item } from 'devextreme-react/form';
import 'devextreme-react/text-area';
import { FilterRow } from 'devextreme-react/tree-list';
import CustomStore from 'devextreme/data/custom_store';
import { CRUDSanpham } from '../../../api/methods/sanpham.method';

function Sanpham({danhmuc}) {
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
            return CRUDSanpham(method)
        }

        if (data) {
            console.log(data);
            return CRUDSanpham(method, data)
            
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
                            <Item dataField="danhmucId" />

                        </Item>

                    </Form>

                </Editing>
                <Column caption={"Tên sản phẩm"}  dataField="name">
                    <RequiredRule/>
                </Column>
                <Column caption={"Danh mục"}  dataField="danhmucId">
                    <RequiredRule/>
                    <Lookup dataSource={danhmuc} valueExpr="id" displayExpr="name" />
                </Column>
                <Column caption={"Số lượng"}  dataField="soluong"></Column>
            </DataGrid>
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <Button
                    text="Click me"
                />
            </div>

        </>
    )
}

export default Sanpham