import ResponsiveBox, {
  Col,
  Item,
  Location, Row
} from 'devextreme-react/responsive-box';
import { Route, Switch } from "react-router-dom";
import DanhMuc from './Danhmuc/Danhmuc';
import Menu from './Menu/Menu';
import Nhapkho from './Nhapkho';
import DanhSachBan from './BanAn/Danhsachban';
import SanphamWrapper from './Sanpham';
import Order from './Order/Order';

function AppNhaHang() {
  console.log(123213213);
  const sayHelloWorld = () => {
    alert(1)
  }
  return (
    <>
      <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
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
                          <Order />
                        </Route>

                    </Switch>
                </Item>
            </ResponsiveBox>

            </div>
          </div>
      </main>
    </>
  )
}

export default AppNhaHang