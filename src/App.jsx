import React, { useState } from "react";
import Tasks from "./components/Tasks";

import './App.css';
import AddTask from "./components/AddTask";


const App = () => {

  const [tasks, setTasks] = useState([
      {
        id: '1',
        title: 'Estudar Dev',
        completed: false
      },
      {
        id: '2',
        title: 'Ler Livros',
        completed: true
      },
  ]);

  const handleTaskAddition = (taskTitle) => {
    const newTask = [ ... tasks, {
      title: taskTitle,
      id: Math.randon(10),
      completed: false,
    }]
  }

  return (
    <div>
      <div className="container">
        <AddTask />
        <Tasks tasks={tasks}/>
      </div>

    </div>
  ) 
};

export default App;