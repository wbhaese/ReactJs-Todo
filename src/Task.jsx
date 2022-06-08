import React from "react";
import { CgClose } from "react-icons/cg";

import "./Task.css";

const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {
  return (
    <div
      className="task-container"
      style={task.completed ? { borderLeft: "9px solid chartreuse" } : {}}
    >
      <div className="task-title" onClick={() => handleTaskClick(task.id)}>
        <p>{task.title}</p>
      </div>
      <div className="buttons-container">
        <button
          className="remove-task-button"
          onClick={() => handleTaskDeletion(task.id)}
        >
          <CgClose />
        </button>
      </div>
    </div>
  );
  /*return (
    <div className="task-container">
      <h1>{task.title}</h1>
    </div>
  );*/
};

export default Task;
