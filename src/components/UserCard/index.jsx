import React from 'react'
import { Card } from 'react-bootstrap'
import { MdMailOutline } from 'react-icons/md'
import { TbPhoneCall } from 'react-icons/tb'
import { HiArrowRight } from 'react-icons/hi'
import './userCard.css'

export const UserCard = ({ usersdata }) => {
  return (
    <Card className="card-id my-4">
      <div className="users-details">
        <div className="img-wrapper">
          <img src={usersdata.picture.large} alt="" />
        </div>
        <div className="details-wrapper">
          <p className="user-name">{`${usersdata.name.first} ${usersdata.name.last}`}</p>
          <p className="user-location">{`${usersdata.location.street.number}, ${usersdata.location.street.name}, ${usersdata.location.city}, ${usersdata.location.country}`}</p>
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
              <button>
                <HiArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
