import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div className='sign_in'>
      <div className="container">
        <div className="sign_in_page_con">
          <div className="sign_inImg">
            <img id='sign_inImg' src="./images/done.svg" alt="" />
          </div>
          <div className="sign_in_texts">
            <div className="title">
              <p>Welcome back to</p>
              <h2>OUR REMINDER</h2>
            </div>
          </div>
          <form method='post'>
            <div className="txt_field">
              <input type="email" required />
              <span></span>
              <label>Enter your email</label>
            </div>
            <div className="txt_field">
              <input type="password" required />
              <span></span>
              <label>Enter password</label>
            </div>
          </form>
          <div className="btn">
            <Button variant="contained">Sign In</Button>
          </div>
          <div className="help_user">Don’t have an account ?
            <Link to={'/register'}>
              <span> Sign Up</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn