import React from 'react'
import "./Sidebar.css"
import {RssFeed} from "@mui/icons-material"

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-wrapper">
        <ul className="sidebar-list">
          <li className="sidebar-list-item">
              <RssFeed className='sidebar-icon'/>
              <span className="sidebar-list-item-text">Feed</span>
          </li>
          <li className="sidebar-list-item">
              <RssFeed className='sidebar-icon'/>
              <span className="sidebar-list-item-text">Feed</span>
          </li>
          <li className="sidebar-list-item">
              <RssFeed className='sidebar-icon'/>
              <span className="sidebar-list-item-text">Feed</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
