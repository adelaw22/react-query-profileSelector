import React, { useState } from 'react'
import { useQuery } from 'react-query'
import FilterCol from './components/FilterCol'
import CardCol from './components/CardCol'
import axios from 'axios'

const MainPage = () => {
  const [userArray, setUserArray] = useState()

  const { data } = useQuery(
    'usersData',
    () => axios.get('https://randomuser.me/api/?results=6'),
    {
      onSuccess: (res) => setUserArray(res.data.results),
    },
  )

  return (
    <div className="container">
      {' '}
      <div className="row">
        <div className="col-md-5">
          <FilterCol userArray={userArray} setUserArray={setUserArray} />
        </div>

        <div className="col-md-7 py-5">
          <CardCol data={userArray} />
        </div>
      </div>
    </div>
  )
}

export default MainPage
