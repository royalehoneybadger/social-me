import React from 'react'
import "./Login.css"

export default function Login(){
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
                <input placeholder='Email' type="Email" className="login-input" />
                <input  placeholder='Password' type="Password" className="login-input" />
                <button className="login-button">Log In</button>
                <span className="login-forgot">Forgot Password?</span>
                <button className="login-register-button">Create a New Account</button>
            </div>

        </div>
      </div>
    </div>
  )
}


