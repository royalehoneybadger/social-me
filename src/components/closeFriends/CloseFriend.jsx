import React from 'react'
import './closeFriend.css'

export default function closeFriend({user}){
  return (
    <li className="sidebar-friend">
    <img className='sidebar-pfp' src={user.profilePicture} alt="" />
    <span className='sidebar-friend-name'>{user.username}</span>
  </li>
  )
}


