import React, { useEffect, useState } from 'react'
import List from '../components/List';
import Button from '@mui/material/Button';
import Profile from '../components/Profile';
import { AxiosInstance } from '../common/AxiosInstance';

const Lists = () => {
  const [lists, setLists] = useState([]);
  const [listName, setListName] = useState('');

  useEffect(()=>{
    const getData = async()=>{
      try {
        const res = await AxiosInstance.get('/lists');
        setLists(res.data)
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  },[])

  const deleteList = async (data,index)=>{
    try {
      await AxiosInstance.delete(`/lists/${data.uuid}`);
      const localList = [...lists]
      localList.splice(index,1);
      setLists(localList)
    } catch (error) {
      console.log(error);
    }
  }

  const addList = async()=>{
    try {
      const res = await AxiosInstance.post('lists',{name:listName});
      if(res.status === 200){
        setLists([...lists,res.data]);
        setListName('')
      }
    } catch (error) {
      console.log(error);
    }
  } 

  return (
    <div className='lists'>
      <div className="container">
        <div className="lists_page_con">
          <Profile />
          {
            lists.length ?
              <div className="lists">
                {
                  lists.map((list, i) => (
                    <List data={list} key={i} index={i} deleteList={deleteList}/>
                  ))
                }
              </div>
              :
              <div className="empty_img">
                <img id='empty_img' src="./images/empty.avif" alt="" />
              </div>
          }
          <div className="add_task">
            <div className="txt_field">
              <input type="text" value={listName} onChange={(e)=>setListName(e.target.value)} required/>
              <span></span>
              <label>What is the task today?</label>
            </div>
            <Button variant="contained" onClick={addList}>Add Task</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Lists