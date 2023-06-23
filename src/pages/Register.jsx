import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import { AxiosInstance } from '../common/AxiosInstance';

const Register = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: '',
    email: '',
    password: '',
  })

  const handleData = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData({ ...data, [name]: value });
  }
  
  const sendData = async () => {

    if (data.username && data.email && data.password) {
      try {
        const res = await AxiosInstance.post('/users/register', data);
        if (res.status === 200) {
          sessionStorage.setItem('token', res.data.token);
          navigate('/lists')
        }
      } catch ({ response }) {
        const status = response.status;
        if (status === 409) alert('Email ya-da Username gabat gelyan ulanyjy bar!')
      }
    } else {
      alert("Boshluklary dolduryn")
    }
  }

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
              <input type="text" name='username' onChange={(e) => handleData(e)} required />
              <span></span>
              <label>Enter your name</label>
            </div>
            <div className="txt_field">
              <input type="text" name="email" onChange={(e) => handleData(e)} required />
              <span></span>
              <label>Enter your email</label>
            </div>
            <div className="txt_field">
              <input type="password" name='password' onChange={(e) => handleData(e)} required />
              <span></span>
              <label>Enter password</label>
            </div>
          </form>
          <div className="btn">
            <Button variant="contained" onClick={sendData}>Register</Button>
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