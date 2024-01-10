import React from 'react'
import "./Share.css"
import {PermMedia, Label, Room, EmojiEmotions} from "@mui/icons-material"

const Share = () => {
  return (
    <div className='share'>
      <div className="share-wrapper">
        <div className="share-top">
            <img className='share-pfp' src="/Assets/person/3.jpeg" alt="" /> 
            <input placeholder="What's on your mind?" className="share-input" />
        </div>
        <hr className='share-hr' />
        <div className="share-bottom">
            <div className="share-options">
                <div className="share-option">
                    <PermMedia htmlColor='blue' className='share-icon'/>
                    <span className='share-option-text'>Photo or Video</span>  
                </div>
                <div className="share-option">
                    <Room htmlColor='green' className='share-icon'/>
                    <span className='share-option-text'>Location</span>  
                </div>
                <div className="share-option">
                    <Label  htmlColor='pink' className='share-icon'/>
                    <span className='share-option-text'>Tag</span>  
                </div>
                <div className="share-option">
                    <EmojiEmotions htmlColor='yellow' className='share-icon'/>
                    <span className='share-option-text'>Feelings</span>  
                </div>
            </div>
            <button className="share-button">Share</button>
        </div>
      </div>
    </div>
  )
}

export default Share
