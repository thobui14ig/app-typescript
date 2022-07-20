import React, { useEffect, useState } from 'react'
import SelectBox from 'devextreme-react/select-box';
import './thongke.css'
import { getDoanhthuthang, getDoanhthutuan } from '../../../api/methods/thongke.method';
import dayjs from 'dayjs';

const monthArr = [1,2,3,4,5,6,7,8,9,10,11,12]
const day = new Date();
const curentMonth = day.getMonth() + 1;

const startWeek = dayjs(day).startOf('week').format('YYYY-MM-DD')
const endWeek = dayjs(day).endOf('week').format('YYYY-MM-DD')

function Thongke() {
  const [month, setMonth] = useState(curentMonth)
  const [doanhthuthang, setDoanhthuthang] = useState(0)
  const [doanhthutuan, setDoanhthutuan] = useState(0)


  const onChange = (e) => {
    setMonth(e.value);
  }
  useEffect(() => {
    const fetch = async() => {
        const data = await getDoanhthuthang(month)
        setDoanhthuthang(data)
    }

    fetch();
  }, [month])

  useEffect(() => {
    const fetch = async() => {
        const dataTuan = await getDoanhthutuan(startWeek, endWeek)
        setDoanhthutuan(dataTuan);
    }
    fetch();
  }, [])


  return (
    <div className="flex-container">
      <div>
        <p>Doanh thu tháng {month}:</p>
        <div>
          <SelectBox items={monthArr} onValueChanged={onChange}/>
        </div>
        <p>{doanhthuthang.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</p>
      </div>
      <div>
        <p>Doanh thu tuần này:</p>
        <p>{(doanhthutuan).toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</p>
      </div>
      <div>
        <p>Doanh thu năm:</p>
        <p>{(doanhthutuan).toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</p>
      </div>
    </div>
  )
}

export default Thongke