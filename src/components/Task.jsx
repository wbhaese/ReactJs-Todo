import React from 'react';

import "./Task.css";

const Task = ({task}) => {
    return (
        <div className='task-container'>
            <h1>{task.title}</h1>
            <h3>{task.id}</h3>
        </div>   
    );
}

export default Task;