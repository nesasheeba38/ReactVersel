import { useState } from 'react';
import { useAtom } from 'jotai';
import { taskAtom } from './taskAtom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';


export const ToDoApp=()=>{
    const[task,setTask]=useAtom(taskAtom);
    const[input,setInput]=useState('');

const handleChange=(e)=>{
   setInput(e.target.value)
};

const addTask=()=>{
    const trimmed = input.trim();
    if (trimmed) {
      setTask([...task, trimmed]);
      setInput('');
    }
};

const deleteTask=(index)=>{
 const newTask=(task.filter((_,i)=>i!==index));
 setTask(newTask);
};

return( <div className="container mt-4">
      <Form.Group className="mb-4 w-100" controlId="formGroupTask">
        <Form.Label>To-Do List</Form.Label>
        <Form.Control type="text" value={input} onChange={handleChange} placeholder="Enter a task" />
      </Form.Group>

        <Button variant="success"onClick={addTask} className="mb-3">
        Add Task
      </Button>

      <ListGroup>
        {task.map((task, index) => (
          <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
            {task}
            <Button variant="info"size="10px" onClick={() => deleteTask(index)}>
              Delete
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>)
}