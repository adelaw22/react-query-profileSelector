import React, { useEffect } from 'react'
import { useParams, useOutletContext, Link } from 'react-router-dom'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import { FiMail } from 'react-icons/fi'
import { TbPhoneCall } from 'react-icons/tb'
import './userprofile.css'

const UserProfile = () => {
  const { data } = useOutletContext()
  const { userId } = useParams()

  const eachUser = data.find((user) => user.login.username === userId)

  // useEffect(() => {
  //   localStorage.setItem('user', JSON.stringify(eachUser))
  // }, [])

  // const userInfo = JSON.parse(localStorage.getItem('user'))
  // console.log(userInfo)

  return (
    <div>
      <div className="backBtn">
        <Link to="/">
          <HiArrowNarrowLeft />
          RESULTS
        </Link>
      </div>

      <div className="profile-wrapper">
        <div className="img-wrapper">
          <img src={eachUser.picture.large} alt="" />
        </div>
        <div className="details-container">
          <p className="user_name">
            {`${eachUser.name.first} ${eachUser.name.last} `}
            <span className="user_age">{eachUser.dob.age}</span>
          </p>
          <p className="user_add">
            {`${eachUser.location.street.number}, ${eachUser.location.street.name}, ${eachUser.location.city}, `}
          </p>
          <div className="user_mail">
            <FiMail />
            <p>{eachUser.email}</p>
          </div>
          <div className="user_mail user_date">
            <p>{`JOINED ON : ${eachUser.registered.date}`}</p>
          </div>
          <p className="user_num">
            <TbPhoneCall />
            {eachUser.phone}
          </p>
          <p></p>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
