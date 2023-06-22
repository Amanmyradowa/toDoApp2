import React from 'react';
import Profile from '../components/Profile';
import Task from '../components/Task';
import { TaskDatas } from '../datas/taskDatas';

const Tasks = () => {
  return (
    <div className='tasks_page'>
      <div className="container">
        <div className="tasks_page_con">
          <Profile />
          <div className="tasks_con">
            <div className="tasks">
              <div className="task_theme">Education Plans</div>
              <div className="task_scrolbar">
                {
                  TaskDatas.map((task, i) => (
                    <Task note={task.note} key={i} />
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tasks