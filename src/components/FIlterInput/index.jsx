import React, { useState, useEffect } from 'react'
import { MdOutlineSearch } from 'react-icons/md'
import './filterInput.css'

export const FilterInput = ({ placeholder, data, setUserArray }) => {
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    if (inputValue.toLowerCase() === '') {
      setUserArray(data)
      return
    }
    const updatedList = data.filter((item) => {
      const name = `${item.name.first} ${item.name.last}`

      return name.toLowerCase().includes(inputValue)
    })
    setUserArray(updatedList)
  }, [inputValue])

  return (
    <div className="d-flex my-3 input-wrapper">
      <MdOutlineSearch />
      <input
        placeholder={placeholder}
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
    </div>
  )
}
