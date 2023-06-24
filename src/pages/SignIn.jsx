import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { AxiosInstance } from '../common/AxiosInstance';

const SignIn = () => {
  const [data, setData] = useState({
    username: '',
    password: ''
  })

  const handleData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({...data, [name]: value})
  }

  const sendData = async () => {
    if(data.username && data.password) {
      try {
        const res = await AxiosInstance.post('users/login', data);
        if(res.status === 200) {
          sessionStorage.setItem('token', res.data.token);
          window.location.href='/lists';
        }
      } catch ({response}) {
        const status = response.status;
        if(status === 400) alert('Username or password wrong')
      }
    }else{
      alert('Boshluklary dolduryn')
    }
  }

  return (
    <div className='sign_in'>
      <div className="container">
        <div className="sign_in_page_con">
          <div className="sign_inImg">
            <img id='sign_inImg' src="./images/done.svg" alt="" />
          </div>
          <div className="sign_in_texts">
            <div className="title">
              <p>Welcome back <br /> to</p>
              <h2>OUR REMINDER</h2>
            </div>
          </div>
          <form method='post'>
            <div className="txt_field">
              <input type="text" name='username' onChange={(e) => handleData(e)} required />
              <span></span>
              <label>Enter your name</label>
            </div>
            <div className="txt_field">
              <input type="password" name='password' onChange={(e) => handleData(e)} required />
              <span></span>
              <label>Enter your password</label>
            </div>
          </form>
          <div className="btn">
            <Button variant="contained" onClick={sendData}>Sign In</Button>
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