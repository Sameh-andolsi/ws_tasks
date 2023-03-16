import { Button } from "react-bootstrap";
import "./AddTask.css"
import { useState } from "react";
import { addTask } from "../../redux/action/action";
import { useDispatch } from "react-redux";
const AddTask = () => {

    const dispatch=useDispatch()

    const [newTask , setNewTask]=useState("")
    const handleChange =(e)=>{
        setNewTask(e.target .value )
    }
    const handleAdd =()=>{
        dispatch(addTask(newTask))
    }
  return (
    <div className="addT">
      <input type="text" placeholder="" onChange={handleChange} />
      <Button  className="addBtn" onClick={handleAdd}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path
            fill="currentColor"
            d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"
          ></path>
        </svg>
        Add Task
      </Button>
    </div>
  );
};
export default AddTask;
