import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className='register'>
      <div className="container">
        <div className="register_page_con">
          <div className="registerImg">
            <img id='registerImg' src="./images/done.svg" alt="" />
          </div>
          <div className="register_texts">
            <h2 className="title">Get’s things done <br /> with TODO</h2>
            <div className="motivation">Let’s help you meet up your tasks</div>
          </div>
          <form method='post'>
            <div className="txt_field">
              <input type="text" required />
              <span></span>
              <label>Enter your name</label>
            </div>
            <div className="txt_field">
              <input type="text" required />
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
            <Button variant="contained">Register</Button>
          </div>
          <div className="help_user">Already have an account ?
            <Link to={'/signIn'}>
              <span> Sign In</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register