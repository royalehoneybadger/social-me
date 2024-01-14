import React from 'react'
import './Profile.css'
import Topbar from '../../../components/topbar/Topbar'
import Sidebar from '../../../components/sidebar/Sidebar'
import Feed  from '../../../components/feed/Feed'
import Rightbar from '../../../components/rightbar/Rightbar'

const Profile = () => {
  return (
    <>
    <Topbar/>
    <div className="profile">
        <Sidebar/>
        <div className="profile-right">
            <div className="profile-right-top">
                <div className="profile-cover">
                    <img  className='profile-cover-img' src="Assets/post1/3.jpeg" alt="" />
                    <img  className='profile-user-img' src="Assets/person/4.jpeg" alt="" />
                </div>
                <div className="profile-info">
                    <h4 className='profile-info-name'>Amber Taylor</h4>
                    <span className='profile-info-desc'>Hello there!</span>
                </div>
            </div>
            <div className="profile-right-bottom">
                <Feed/>
                <Rightbar profile/>
            </div>
        </div>
    </div>
</>
  )
}

export default Profile
