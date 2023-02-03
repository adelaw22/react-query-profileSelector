import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import { FilterInput } from '../FIlterInput'
import { CustomDropDown } from '../CustomDropDown'
import { ToggleSwitch } from '../ToggleSwitch'
import './cardCol.css'

const CardCol = ({ data, setUserArray }) => {
  const [checked, setChecked] = useState(true)

  return (
    <Card style={{ color: '#000000DE', borderRadius: '20px', padding: '24px' }}>
      <div className="card-head">
        <h3>All Users</h3>
        <p>Filter by</p>

        <div className="filter-components">
          <FilterInput
            placeholder="find in list"
            data={data}
            setUserArray={setUserArray}
          />
          <div className="toggle-DD">
            <CustomDropDown data={data} setUserArray={setUserArray} />
            <ToggleSwitch checked={checked} setChecked={setChecked} />
          </div>
        </div>

        <Outlet context={{ data, checked }} />
      </div>
    </Card>
  )
}

export default CardCol
