import React from 'react'
import "./Rightbar.css"
import {Users} from "../../dummyData"
import Online from "../online/Online"
 
export default function Rightbar({profile}){

  const HomeRightbar = () => {
    return(
      <>
      <div className="birthday-container">
          <img className='birthday-img'  src="Assets/gift.png" alt="" />
          <span className="birthday-text">
            <b>Xiao Fei</b> and 2 other friends celebrate b-day today!
          </span>
        </div>
        <img className='rightbar-ad' src="Assets/ad.png" alt = ''/>
        <h4 className="rightbar-title">Friends Online</h4>
        <ul className="rightbar-friends">
          {Users.map((u)=>(
            <Online key={u.id} user={u}/>
          ))}
         
        </ul>
      </>
    )
  }

  const ProfileRightbar = () =>{
    return (
      <>
      <h4 className='rightbar-title'>User info</h4>
      <div className="rightbar-info">
        <div className="rightbar-info-item">
          <span className="rightbar-info-key">City:</span>
          <span className="rightbar-info-value">Los Angeles</span>
        </div>
       
        <div className="rightbar-info-item">
          <span className="rightbar-info-key">From:</span>
          <span className="rightbar-info-value">Charlottetown</span>
        </div>
        
        <div className="rightbar-info-item">
          <span className="rightbar-info-key">Relationship:</span>
          <span className="rightbar-info-value">Single</span>
        </div>
      </div>

      <h4 className="rightbar-title">User Friends</h4>
      <div className="rightbar-followings">
        <div className="rightbar-following">
          <img src="Assets/person/9.jpeg" alt="" className="rightbar-following-img" />
          <span className="rightbar-following-name">Gary Duty</span>
        </div>
        <div className="rightbar-following">
          <img src="Assets/person/10.jpeg" alt="" className="rightbar-following-img" />
          <span className="rightbar-following-name">Safak Kocaoglu</span>
        </div>
        <div className="rightbar-following">
          <img src="Assets/person/2.jpeg" alt="" className="rightbar-following-img" />
          <span className="rightbar-following-name">Janell Shrum</span>
        </div>
        <div className="rightbar-following">
          <img src="Assets/person/8.jpeg" alt="" className="rightbar-following-img" />
          <span className="rightbar-following-name">Kristen Thomas</span>
        </div>
        <div className="rightbar-following">
          <img src="Assets/person/7.jpeg" alt="" className="rightbar-following-img" />
          <span className="rightbar-following-name">Travis Bennett</span>
        </div>
        <div className="rightbar-following">
          <img src="Assets/person/6.jpeg" alt="" className="rightbar-following-img" />
          <span className="rightbar-following-name">Shirley Beauch</span>
        </div>
      </div>
      </>
    )
  }
  return (
    <div className='rightbar'>
      <div className="rightbar-wrapper">
        {profile ?  <ProfileRightbar/> : <HomeRightbar/>}
      </div>
    </div>
  )
}

