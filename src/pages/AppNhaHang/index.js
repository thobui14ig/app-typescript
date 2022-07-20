import ResponsiveBox, {
  Col,
  Item,
  Location, Row
} from 'devextreme-react/responsive-box';
import { Route, Switch } from "react-router-dom";
import AppNhaHangProvider from '../../context/appnhahang.context';
import DanhSachBan from './BanAn/Danhsachban';
import DanhMuc from './Danhmuc/Danhmuc';
import Menu from './Menu/Menu';
import Nhapkho from './Nhapkho';
import OrderWraper from './Order';
import SanphamWrapper from './Sanpham';
import Thongke from './Thongke';

function AppNhaHang() {
  return (
    <>
    <AppNhaHangProvider>
        <main>
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8" style={{ padding: 0 }}>
              <div className="px-4 py-6 sm:px-0">
              <ResponsiveBox>
                  <Row />
                  <Col ratio={1}/>
                  <Col ratio={3} />
                  <Item>
                      <Location row={0} col={0}/>
                      <Menu/>
                  </Item>
                  <Item>
                      <Location  row={0} col={1}/>

                      <Switch>

                          <Route path="/appnhahang/sanpham">
                            <SanphamWrapper />
                          </Route>


                          <Route path="/appnhahang/danhmuc">
                            <DanhMuc />
                          </Route>

                          <Route exact path="/appnhahang">
                            <SanphamWrapper />
                          </Route>
                          <Route exact path="/appnhahang/danhsachban">
                            <DanhSachBan />
                          </Route>
                          <Route exact path="/appnhahang/nhapkho">
                            <Nhapkho />
                          </Route>
                          <Route exact path="/appnhahang/order/:id">
                            <OrderWraper />
                          </Route>
                          <Route exact path="/appnhahang/thongke">
                            <Thongke />
                          </Route>

                      </Switch>
                  </Item>
              </ResponsiveBox>

              </div>
            </div>
        </main>      
    </AppNhaHangProvider>

    </>
  )
}

export default AppNhaHang