import React, { useEffect, useState } from 'react';
import Profile from '../components/Profile';
import Task from '../components/Task';
import { TaskDatas } from '../datas/taskDatas';
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';
import { AxiosInstance } from '../common/AxiosInstance';

const Tasks = () => {
  const {id,name} = useParams();
  const [tasks, setTasks] = useState([]);
  const [taskName,setTaskName] = useState('');

  useEffect(()=>{
    const getData = async ()=>{
      try {
        const res = await AxiosInstance.get(`/lists/${id}/tasks`);
        if(res.status === 200){
          setTasks(res.data);
        }
      } catch (error) {
        console.log(error)
      }
    }
    getData();
  },[])

  const addTask = async ()=>{
    if(taskName){
      try {
        const res = await AxiosInstance.post('tasks',{text:taskName,completed:false,listUuid:id});
        console.log(res);
        if(res.status === 200){
          setTaskName('')
          setTasks([...tasks,res.data]);
        }
      } catch (error) {
        console.log(error)
      }
    }else{
      alert("Boshluklary doldur")
    }
  }

  const deleteTask = async (data,index)=>{
    try {
      const res = await AxiosInstance.delete('/tasks/'+data.uuid);
      if(res.status === 200){
        const localTasks = [...tasks]
        localTasks.splice(index,1);
        setTasks(localTasks)
      }
    } catch (error) {
      console.log(error);
    }
  }

  const editTask = async (data,value,index,completed)=>{
    if(value){
      try {
        const res = await AxiosInstance.put('/tasks/'+data.uuid,{text:value,completed: completed !== undefined ? completed : data.completed,listUuid:id});
        if(res.status === 200){
          const localTasks = [...tasks];
          localTasks[index].text = value;
          setTasks(localTasks)
        }
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <div className='tasks_page'>
      <div className="container">
        <div className="tasks_page_con">
          <Profile />
          <div className="tasks_con">
            <div className="tasks">
              <div className="task_theme">{name}</div>
              <div className="task_scrolbar">
                {
                  tasks.map((task, i) => (
                    <Task data={task} key={i} index={i} deleteTask={deleteTask} editTask={editTask}/>
                  ))
                }
              </div>
            </div>
          </div>
          <div className="add_task">
            <div className="txt_field">
              <input type="text" value={taskName} onChange={(e)=>setTaskName(e.target.value)} onKeyDown={(e)=>e.key === 'Enter' ? addTask() : ''} required />
              <span></span>
              <label>What is the task today?</label>
            </div>
            <Button variant="contained" onClick={addTask}>Add Task</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tasks