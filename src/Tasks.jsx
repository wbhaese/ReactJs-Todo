import React from "react";
import Task from "./Task";

//tasks estao dentro das props, para evitar colocar 'props.tasks'
//usa-se {tasks}
const Tasks = ({ tasks, handleTaskClick, handleTaskDeletion }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          task={task}
          handleTaskClick={handleTaskClick}
          handleTaskDeletion={handleTaskDeletion}
        />
      ))}
    </>
  );
};

export default Tasks;
