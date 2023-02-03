import React, { useState } from 'react'
import { useQuery } from 'react-query'
import FilterCol from './components/FilterCol'
import CardCol from './components/CardCol'
import axios from 'axios'

const MainPage = () => {
  const [userArray, setUserArray] = useState()

  const { data, isLoading } = useQuery('usersData', () =>
    axios.get('https://randomuser.me/api/?results=12').then((response) => {
      setUserArray(response.data.results)
      return response.data.results
    }),
  )
  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <div className="container">
      {' '}
      <div className="row">
        <div className="col-lg-5 col-sm-12">
          <FilterCol data={data} setUserArray={setUserArray} />
        </div>

        <div className="col-lg-7 col-sm-12 py-5">
          <CardCol data={userArray} setUserArray={setUserArray} />
        </div>
      </div>
    </div>
  )
}

export default MainPage
