import React from 'react'
import {useUser} from '../../utils/UserContext'
import CardBtn from '../CardBtn'
// import './style.css'

function Card() {
  const {user, showNextUser, showPreviousUser} = useUser()

  if (!user) return <div>No users found.</div>

  return (
    <div className="flex-fill w-100">
      <img className="card-img-top" src={user.image} alt="" />
      <div className="card-body">
        {/* <h5 className="card-title">{user.login}</h5> */}
        {/* <p className="card-text">Favourite language: {user.language}</p> */}
        <CardBtn type="back" onClick={showPreviousUser} />
        <CardBtn type="next" onClick={showNextUser} />
      </div>
    </div>
  )
}

export default Card
