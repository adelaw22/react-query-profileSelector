import React, { useState, useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'

export function CustomDropDown() {
  const [value, setValue] = useState('')
  const options = useMemo(() => countryList().getData(), [])

  const changeHandler = (value) => {
    setValue(value)
  }

  return (
    <div>
      <label>Country</label>
      <Select options={options} value={value} onChange={changeHandler} />
    </div>
  )
}
