import React from 'react'
import List from '../components/List';
import { Link } from 'react-router-dom';
import { ListDatas } from '../datas/listDatas';
import Button from '@mui/material/Button';
import Profile from '../components/Profile';

const Lists = () => {
  return (
    <div className='lists'>
      <div className="container">
        <div className="lists_page_con">
          {/* <div className="empty_img">
            <img id='empty_img' src="./images/empty.avif" alt="" />
          </div> */}
          <Profile />
          <div className="lists">
            {
              ListDatas.map((list, i) => (
                <Link to={'/tasks'} key={i}>
                  <List data={list} />
                </Link>
              ))
            }
          </div>
          <div className="add_task">
            <div className="txt_field">
              <input type="text" required />
              <span></span>
              <label>What is the task today?</label>
            </div>
            <Button variant="contained">Add Task</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Lists