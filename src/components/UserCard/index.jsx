import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import { MdMailOutline } from 'react-icons/md'
import { TbPhoneCall } from 'react-icons/tb'
import { HiArrowRight } from 'react-icons/hi'
import './userCard.css'

export const UserCard = ({ usersdata, checked }) => {
  return (
    <Card className="card-id my-4">
      <div className="users-details">
        <div className="img-wrapper">
          <img src={usersdata.picture.large} alt="" />
        </div>
        <div className="details-wrapper">
          <p className="user-name">{`${usersdata.name.first} ${usersdata.name.last}`}</p>
          <p className="user-location">
            {`${usersdata.location.street.number}, ${usersdata.location.street.name}, ${usersdata.location.city}, `}
            {checked && <span>{usersdata.location.country}</span>}
          </p>

          <div className="users-contact">
            <div>
              <MdMailOutline />
              <span>{usersdata.email}</span>
            </div>
            <div>
              <TbPhoneCall />
              <span>{usersdata.phone}</span>
            </div>
            <div>
              <Link to={`/${usersdata.login.username}`}>
                {' '}
                <button>
                  <HiArrowRight />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
