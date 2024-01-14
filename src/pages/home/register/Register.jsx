import React from 'react'
import "./Register.css"

export default function Register()  {
  return (
    <div className='login'>
      <div className="login-wrapper">
        <div className="login-left">
            <h3 className="login-logo">SocialMe</h3>
            <span className="login-desc">
                Connect, share and discover on SocialMe.
            </span>
        </div>
        <div className="login-right">
            <div className="login-box">
                <input placeholder='Username' className="login-input" />
                <input placeholder='Email' type="Email" className="login-input" />
                <input  placeholder='Password' type="Password" className="login-input" />
                <input  placeholder='Password Again' type="Password" className="login-input" />
                <button className="login-button">Sign Up</button>
                <button className="login-register-button">Log into Account</button>
            </div>

        </div>
      </div>
    </div>
  )
}


