import React, { useState, useMemo, useEffect } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'

export function CustomDropDown({ data, setUserArray }) {
  const [inputValue, setInputValue] = useState('')
  const options = useMemo(() => countryList().getData(), [])

  const changeHandler = (value) => {
    setInputValue(value)
  }

  useEffect(() => {
    if (inputValue === '') {
      setUserArray(data)
      return
    }
    const updatedList = data?.find(
      (user) => user.location.country === options.label,
    )
    setUserArray(updatedList)
  }, [inputValue])

  return (
    <div className="DD-wrapper">
      <label>Country</label>
      <Select options={options} value={inputValue} onChange={changeHandler} />
    </div>
  )
}
