import React from 'react'
import './Online.css'

export default function Online({user}) {
  return (
    <li className="rightbar-friend">
    <div className="rightbar-image-container">
      <img src={user.profilePicture} alt="" className="rightbar-pfp" />
      <span className="rightbar-online"></span>
    </div>
    <span className="rightbar-username">{user.username}</span>
  </li>
  )
}


