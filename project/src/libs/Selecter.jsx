import React from 'react'
import { Select } from 'antd'
import { useStore } from '../store/useStore'

const Selecter = ({ placeholder, number, selecter }) => {  

const chName = useStore((state) => state.changeName);
const chName2 = useStore((state) => state.changeName2);
const chLocation = useStore((state) => state.changeLocation);
const chLocation2 = useStore((state) => state.changeLocation2);
const chSalary = useStore((state) => state.changeSalary);

const onChange = (value) => {
  number === 1 ? chName(value) : number === 2 ? chLocation(value) : number === 3 ? chName2(value) : number === 4 ? chLocation2(value) : chSalary(value) 
}

  return (
    <> 
        <Select
        showSearch
        allowClear
        placeholder= {placeholder}
        optionFilterProp="children"
        onChange={onChange}
        filterOption={(input, option) =>
          (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
        }
        options={selecter}
        />
    </>
  )
}

export default Selecter