import React, { useState } from 'react'
import { MdOutlineSearch } from 'react-icons/md'
import './filterInput.css'

export const FilterInput = ({ placeholder, userArray, setUserArray }) => {
  const [inputValue, setInputValue] = useState('')

  const filterBySearch = (event) => {
    setInputValue(event.target.value)

    if (inputValue.toLowerCase() === '') {
      setUserArray(userArray)
    } else {
      const updatedList = userArray.filter((item) =>
        item?.name.first.toLowerCase().includes(inputValue),
      )
      setUserArray(updatedList)
    }
  }

  return (
    <div className="d-flex my-3 input-wrapper">
      <MdOutlineSearch />
      <input
        placeholder={placeholder}
        onChange={filterBySearch}
        value={inputValue}
      />
    </div>
  )
}
