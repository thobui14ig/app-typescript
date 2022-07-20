import { Button } from 'devextreme-react';
import { Popup, ToolbarItem } from 'devextreme-react/popup';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { hoanthanhdonhang, huy, thanhtoan } from '../../../api/methods/order.method';
import { useAppNhaHang } from '../../../context/appnhahang.context';
function Xuly({orderId, orderLenght, thanhtoanReturn, total}) {
    const {setRender, render} = useAppNhaHang()
    const history = useHistory();
    const [visible, setVisible] = useState(false)
    const [thongbao, setThongbao] = useState("")
    const [key, setKey] = useState(null);

    const [isThanhtoan, setIsThanhtoan] = useState(true);
    const [isHoanthanh, setIsHoanthanh] = useState(true);
    const [isHuy, setIshuy] = useState(true);

  
    useEffect(() => {
        if(orderLenght > 0 && +thanhtoanReturn === 0){
            setIshuy(false)
            setIsThanhtoan(false)
        }else{
            setIshuy(true)
            setIsThanhtoan(true)
        }

        if(!thanhtoanReturn){
            setIsHoanthanh(true)
        }else{
            setIsHoanthanh(false)
        }

    }, [orderLenght]);


    const handleXacnhan = (key) => {
        
        setVisible(true)
        if(key === 1){
            setThongbao('thanh toán')
            setKey(key)
        }

        if(key === 2){
            setThongbao('hoàn thành')
            setKey(key)
        }

        if(key === 3){
            setThongbao('hủy')
            setKey(key)
        }
    }

    const handleXacnhanXuly =async () => {
       
        setVisible(false)
        //thanh toán đơn hàng
        if(key === 1){
            thanhtoan(orderId)
            setIsThanhtoan(true)
            setIsHoanthanh(false)
            setIshuy(true)
        }
        //hoàn thành đơn hàng
        if(key === 2 || key === 3){
            if(key === 2) await hoanthanhdonhang({ orderId: orderId, tongtien: total })
            if(key === 3) await huy(orderId)
            setRender(!render)
            history.push(`/appnhahang/danhsachban`)
        }
    }

    const handleCancleXuly = () => {
        setVisible(false)
    }


    
    const hideInfo = () => {
        setVisible(false)
    }

    return (
        <>
            <div className='xuly'>
                <div className='button'>
                <Button
                    width={120}
                    text="Thanh toán"
                    type="default"
                    stylingMode="contained"
                    onClick={() => handleXacnhan(1)}
                    disabled={isThanhtoan}
                />                
                </div>
                <div className='button'>
                <Button
                    width={120}
                    text="Hoàn thành"
                    type="default"
                    stylingMode="contained"
                    onClick={() => handleXacnhan(2)}
                    disabled={isHoanthanh}
                />
                </div>
                <div className='button'>
                <Button
                    width={120}
                    text="Hủy"
                    type="default"
                    stylingMode="contained"
                    onClick={() => handleXacnhan(3)}
                    disabled={isHuy}
                 
                />
                </div>
            </div>   
            <Popup
                visible={visible}
                width={300}
                height={150}
                hideOnOutsideClick={true}
                onHiding={hideInfo}
            >
                <p>Xác nhận {thongbao} đơn hàng?</p>
                <ToolbarItem
                    widget="dxButton"
                    toolbar="bottom"
                    location="before"
                    options={{text: 'Xác nhận', onClick: () => handleXacnhanXuly()}}
                />
                <ToolbarItem
                    widget="dxButton"
                    toolbar="bottom"
                    location="after"
                    options={{text: 'Cancle', onClick: () => handleCancleXuly()}}
                />
            </Popup>     
        </>

    )
    }

export default Xuly