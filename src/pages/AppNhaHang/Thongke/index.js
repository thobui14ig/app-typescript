import React, { useEffect, useState } from 'react'
import SelectBox from 'devextreme-react/select-box';
import DateBox from 'devextreme-react/date-box';
import './thongke.scss'
import { getDoanhthunam, getDoanhthuthang, getDoanhthutuan } from '../../../api/methods/thongke.method';
import dayjs from 'dayjs';

const monthArr = [1,2,3,4,5,6,7,8,9,10,11,12]
const day = new Date();
const curentMonth = day.getMonth() + 1;

const startWeek = dayjs(day).startOf('week').format('YYYY-MM-DD')
const endWeek = dayjs(day).endOf('week').format('YYYY-MM-DD')

const year = (new Date()).getFullYear();
const listYearPlus = Array.from(new Array(5),(val, index) => index + year);
const listYearSub = Array.from(new Array(5),(val, index) => year - index  );
let listYear = [...new Set(listYearSub.concat(listYearPlus))].sort();

function Thongke() {
  const [month, setMonth] = useState(curentMonth)
  const [currentYear, setCurrentYear] = useState(year)

  const [doanhthuthang, setDoanhthuthang] = useState(0)
  const [doanhthutuan, setDoanhthutuan] = useState(0)
  const [doanhthunam, setDoanhthunam] = useState(0)



  const onChangeMonth = (e) => {
    setMonth(e.value);
  }
  const onChangeYear = (e) => {
    setCurrentYear(e.value);
  }
  useEffect(() => {
    const fetch = async() => {
        const data = await getDoanhthunam(currentYear)
        setDoanhthunam(data)
    }

    fetch();
  }, [currentYear])

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
    <div className="flex-container thongke">
      <div>
        <p>Doanh thu tháng {month}:</p>
        <div>
          <SelectBox items={monthArr} onValueChanged={onChangeMonth} value={month}/>
        </div>
        <p>{doanhthuthang.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</p>
      </div>
      <div>
        <p>Doanh thu tuần này:</p>
        <p>{(doanhthutuan).toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</p>
      </div>
      <div>
        <p>Doanh thu năm:</p>
        <div>
          <SelectBox items={listYear}  onValueChanged={onChangeYear} value={currentYear}/>
        </div>
        <p>{(doanhthunam).toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</p>
      </div>
    </div>
  )
}

export default Thongke