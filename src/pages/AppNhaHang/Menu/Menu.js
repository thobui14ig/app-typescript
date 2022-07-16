import List from 'devextreme-react/list';
import React from 'react';
import { useHistory } from 'react-router-dom';
const menu = [
  {id: 2, name: 'Sản phẩm', key:'sanpham'},
  {id: 1, name: 'Danh mục', key:'danhmuc'},
  {id: 1, name: 'Danh sách bàn', key:'danhsachban'},
  {id: 1, name: 'Nhập kho', key:'nhapkho'},

  

]
function Menu() {
  const history = useHistory();
  const onItemClick = (e) => {
    history.push(`/appnhahang/${e.itemData.key}`);
  }
  return (
    <React.Fragment>
        <div className="widget-container">
          <List
              dataSource={menu}
              onItemClick={onItemClick}
              displayExpr={'name'}
              >
          </List>
        </div>

    </React.Fragment>
  )
}

export default Menu