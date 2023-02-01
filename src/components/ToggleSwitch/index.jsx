import React, { useState } from 'react'
import Switch from 'react-switch'
import './toggleSwitch.css'

export const ToggleSwitch = () => {
  const [checked, setChecked] = useState(false)
  const handleChange = (nextChecked) => {
    setChecked(nextChecked)
  }

  return (
    <label>
      <Switch
        onColor="#30bbb5"
        onHandleColor="#30bbb5"
        handleDiameter={36}
        uncheckedIcon={false}
        checkedIcon={false}
        onChange={handleChange}
        checked={checked}
        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
        className="react-switch"
      />
      <span>Show Country</span>
    </label>
  )
}
