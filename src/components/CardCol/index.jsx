import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import { FilterInput } from '../FIlterInput'
import { CustomDropDown } from '../CustomDropDown'
import { ToggleSwitch } from '../ToggleSwitch'

const CardCol = ({ data }) => {
  const [checked, setChecked] = useState(true)

  return (
    <Card style={{ color: '#000000DE', borderRadius: '20px', padding: '24px' }}>
      <div className="card-head">
        <h3>All Users</h3>
        <p>Filter by</p>

        <div className="filter-components d-flex">
          <FilterInput />
          <div className="d-flex">
            <CustomDropDown />
            <ToggleSwitch checked={checked} setChecked={setChecked} />
          </div>
        </div>

        <Outlet context={{ data, checked }} />
      </div>
    </Card>
  )
}

export default CardCol
