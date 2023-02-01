import React from 'react'
import { FilterInput } from '../FIlterInput'
import { MdGroups } from 'react-icons/md'
import { FaMale, FaFemale } from 'react-icons/fa'
import './filterCol.css'

const UsersBtn = [
  {
    label: 'All',
    icon: <MdGroups />,
    stylebtn: {
      background: '#f935a9',
      borderColor: '#f935a9',
    },
  },
  {
    label: 'Male',
    icon: <FaMale />,
    stylebtn: {
      background: '#30bbb5',
      borderColor: '#30bbb5',
    },
  },
  {
    label: 'Female',
    icon: <FaFemale />,
    stylebtn: {
      background: '#7946c1',
      borderColor: '#7946c1',
    },
  },
]
const FilterCol = ({ userArray, setUserArray }) => {
  const filterbyGender = (label) => {
    if (label === 'All') {
      setUserArray(userArray)
    } else {
      const result = userArray?.filter(
        (item) => item.gender === label.toLowerCase(),
      )
      setUserArray(result)
    }
  }

  return (
    <div className="filter-container">
      <div className="header-wrapper">
        <p className="header-txt">
          Hello, <span>Emerald</span>
        </p>
        <p>Welcome to your dashboard, kindly sort through the user base</p>
      </div>
      <FilterInput
        placeholder="Find a user"
        userArray={userArray}
        setUserArray={setUserArray}
      />
      <div>
        <p>Show Users</p>

        <div className="btn-container">
          {UsersBtn.map((item, i) => (
            <div className="btns-wrapper text-center" key={i}>
              <button
                className="filter-btn"
                style={item.stylebtn}
                onClick={() => filterbyGender(item.label)}
              >
                {item.icon}
              </button>
              <p>{`${item.label} Users`}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FilterCol
