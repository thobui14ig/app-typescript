import 'devextreme-react/text-area';
import { useHistory } from 'react-router-dom';
import { useAppNhaHang } from '../../../context/appnhahang.context';
import './order.css';


function DanhSachBan() {
  const {ban} = useAppNhaHang()
  
    const history = useHistory();
    const handleChonban = async(number) => {
      history.push(`/appnhahang/order/${number}`)
    }

    return (
        <div className="flex-container">
          
          {ban &&
              ban.map((item, index) => {
                return(
                  <div className={item.order?.orderDetails?.length > 0 ? 'ban-active' : ''} key={index} onClick={() => handleChonban(item.id)}>{item.name}</div>
                )

              })

          }

        </div>

    )
}

export default DanhSachBan