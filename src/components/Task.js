import React, { useState } from 'react';
import axios from 'axios';
import { baseURL } from '../Utils/BaseUrl';

const Task = ({users}) => {
    const [userId, setUserId] = useState('');
  const [taskName, setTaskName] = useState('');
  const [taskType, setTaskType] = useState('');

  const handleUserChange = (event) => {
    setUserId(event.target.value);
  };

  const handleTaskNameChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleTaskTypeChange = (event) => {
    setTaskType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newTask = {
      userId,
      taskName,
      taskType
    };

    axios.post(`${baseURL}/api/tasks`, newTask)
      .then(response => {
        console.log(response.data);
  
        setUserId('');
        setTaskName('');
        setTaskType('');
      })
      .catch(error => console.log(error));
  };

  return (
    <div className='form_container'>
      <h2>Task</h2>
      <form className='form'>
        <div className='input_field'>
            <label htmlFor="userId">User:</label>
            <select id="userId" name="userId" value={userId} onChange={handleUserChange} required>
              <option value="">Select User</option>
              {users.map(user => (
                <option key={user._id} value={user._id}>{user.name}</option>
              ))}
            </select>
        </div>

        <div className='input_field'>
            <label htmlFor="taskName">Task Name:</label>
            <input type="text" id="taskName" name="taskName" value={taskName} onChange={handleTaskNameChange} required />
        </div>

        <div className='input_field'>
            <label htmlFor="taskType">Task Type:</label>
            <select id="taskType" name="taskType" value={taskType} onChange={handleTaskTypeChange} required>
              <option value="">Select Type</option>
              <option value="Pending">Pending</option>
              <option value="Done">Done</option>
            </select>
        </div>

        <button className='btn' type="submit" onClick={handleSubmit}>Add Task</button>
      </form>
    </div>
  );
}

export default Task
