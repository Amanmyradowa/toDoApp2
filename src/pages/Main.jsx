import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


const Main = () => {
  return (
    <div className='main'>
      <div className="container">
        <div className="main_page_con">
          <div className="mainImg">
            <img id='mainImg' src="./images/done.svg" alt="" />
          </div>
          <div className="title">
            <p>Welcome to</p>
            <h2>OUR REMINDER</h2>
          </div>
          <p className='text'>″You can always change your plan, but only if you have one. I’m a big believer in to-do lists. It helps us break life into small steps. The most useful to-do list breaks tasks into small steps.″</p>
          <div className="btn">
            <Link to={'/register'}>
              <Button variant="contained">
                Get Start
                <div id='svg'>
                  <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.4167 3.82027H0.589285C0.263852 3.82027 0 4.11306 0 4.47418V7.52576C0 7.88688 0.263852 8.17967 0.589285 8.17967H15.4167V10.6895C15.4167 11.8547 16.6862 12.4382 17.4287 11.6143L21.6548 6.92477C22.1151 6.41401 22.1151 5.58594 21.6548 5.07524L17.4287 0.385667C16.6862 -0.438205 15.4167 0.145301 15.4167 1.31046V3.82027Z" fill="white"/>
                  </svg>
                </div>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main