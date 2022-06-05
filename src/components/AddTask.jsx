import React, { useState } from "react";
import "./AddTask.css";
import "./Button"
import Button from "./Button";

//String test se trata de um 'children' de button
const AddTask = () => {
    const [inputData, setInputData] = useState('');

    const handleInputChange = (e) => {
        setInputData(e.target.value);
    }

    return (
        <div className="add-task-container">
            <input 
                onChange={handleInputChange} 
                value={inputData}
                className="add-task-input" 
                type="text" 
            />
            <div className="add-task-button-container">
                <Button>Adicionar</Button>
            </div>
        </div>
    );
}

export default AddTask; 