
import React ,{useState, useEffect} from "react";
import "./listTask.css"
import { Button } from "react-bootstrap";
import Task from "../Task/Task";
import { useSelector  ,useDispatch} from 'react-redux';
import  {reset} from "../../redux/action/action";
const ListTask = () => {
  const dispatch=useDispatch()
  const tasksList = useSelector((state) => state.taskReducer.tasksList);
  
  const [showDone ,setShowDone]=useState(false)
    const [showNotDone, setShowNotDone] = useState(false);

    const[tasks ,setTasks]=useState([])

    const handleShowDone =()=>{
        setShowDone(true)
        setShowNotDone(false)
    }
       const handleShowNotDone = () => {
         setShowNotDone(true);
         setShowDone(false)
       };
    const handleList =()=>{
      if(showDone ===true){
        setTasks(tasksList.filter((task)=> task.isDone === true))
      }else if(showNotDone){
        setTasks(tasksList.filter((task) => task.isDone === false));
      }
    }
  useEffect (()=>{
setTasks(tasksList)

handleList()
  },[showDone,showNotDone, tasksList])

  const handleReset =()=>{
dispatch(reset())
setShowDone(false)
setShowNotDone(false)
  }
  return (
    <div className="list">
      <div className="list">
        <Button onClick={handleShowDone} className="button1">
          filter by done{" "}
        </Button>
        <Button
          variant="outline-secondary"
          className="button2"
          onClick={handleShowNotDone}
        >
          filter by not done{" "}
        </Button>
        <Button
          variant="outline-success"
          className="button3"
          onClick={handleReset}
        >
          Reset
        </Button>
      </div>
      <div>
        {tasks.map((task) => (
          <Task task={task} />
        ))}
      </div>
    </div>
  );
};
export default ListTask;
