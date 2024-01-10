import React from 'react'
import "./Post.css"
import {More, MoreVert} from '@mui/icons-material'

const Post = () => {
  return (
    <div className='post'>
        <div className="post-wrapper">
            <div className="post-top">
                <div className="post-top-left">
                    <img className='post-pfp' src="/Assets/person/8.jpeg" alt="" />
                    <span className="post-username">Shauna Shipman</span>
                    <span className="post-date">10 min ago</span>
                </div>
                <div className="post-top-right">
                    <MoreVert/>
                </div>
            </div>
            <div className="post-center">
                <span className="post-text">
                    Hello!It's my first post
                </span>
                <img className='post-img' src="Assets/post1/2.jpeg" alt="" />
            </div>
            <div className="post-bottom">
                <div className="post-bottom-left">
                    <img className='like-icon' src="Assets/like.png" alt=""  />
                    <img className='like-icon' src="Assets/heart.png" alt=""  />
                    <span className="post-like-counter">55 people like it</span>
                </div>
                <div className="post-bottom-right">
                    <span className="post-comment-text"> 12 Comments</span>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Post
