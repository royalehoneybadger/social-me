import React from 'react'
import "./Topbar.css"
import {Search, Person, Chat, Notifications} from "@mui/icons-material"


const Topbar = () => {
  return (
    <div className='topbar-container'>
        <div className="topbar-left">
            <span className="logo">SocialMe</span>
        </div>
        <div className="topbar-center">
            <div className="search-bar">
                <Search className='search-icon'/>
                <input placeholder="Search for friend, post or video..." className="search-input" />
            </div>
        </div>
        <div className="topbar-right">
            <div className="topbar-links">
                <span className="topbar-link">Homepage</span>
                <span className="topbar-link">Timeline</span>
            </div>
            <div className="topbar-icons">
                <div className="topbar-icon-item">
                    <Person/>
                    <span className="topbar-icon-badge">2</span>
                </div> 

                <div className="topbar-icon-item">
                    <Chat className='search-input'/>
                    <span className="topbar-icon-badge">1</span>
                </div>

                <div className="topbar-icon-item">
                    <Notifications/>
                    <span className="topbar-icon-badge">1</span>
                </div>   
            </div>
            <img src="/Assets/person/4.jpeg" alt="person-4" className="topbar-image" />
        </div>
    </div>
  )
}

export default Topbar
