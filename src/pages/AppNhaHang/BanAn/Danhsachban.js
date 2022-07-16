import 'devextreme-react/text-area';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getAllBan } from '../../../api/methods/ban.method';
import './order.css';
function DanhSachBan() {
    const [ban, setBan] = useState(null);
    const history = useHistory();
    useEffect(() => {
      const fetch = async() => {
        const data = await getAllBan();
        console.log(data)
        setBan(data)
      }
      fetch();
    }, []);
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