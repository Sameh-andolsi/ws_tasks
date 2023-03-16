import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editTask, changeDone} from "../../redux/action/action";

import "./Task.css"
const Task =({task})=> {
  const dispatch=useDispatch()
    const [show,setShow]=useState(false);
    const handleClose =()=>setShow(false);
     const handleShow = () => setShow(true);


     const [edited ,setEdited]=useState("")
     const handleEdit=(e)=>{
      setEdited(e.target.value)
     }

     const handleSave=()=>{
      dispatch(editTask({edited,id:task.id}))
      handleClose()
     }
      const handleDone =()=>{
dispatch(changeDone(task.id))
      }
 return (
   <div className="tasks">
     <h1 className="titre">{task.description}</h1>
     <Button className="btn2"
       variant={task.isDone ? "outline-danger" : "outline-success"}
       onClick={handleDone}
     >
       {task.isDone ? "Done" : "Undo"}
     </Button>
     <Button  
       variant="outline-warning"
       className="button-edit"
       onClick={handleShow}
     >
       
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
         <path d="M19.4 4.2c-1.2-1.2-3.2-1.2-4.4 0l-1.5 1.5 5.8 5.8 1.5-1.5c1.2-1.2 1.2-3.2 0-4.4l-2.9-2.9zm-1.8 3.5l-9.3 9.3h-3v-3l9.3-9.3 3 3z" />
       </svg>
       Edit
     </Button>
     <Modal
       show={show}
       onHide={handleClose}
       className="modal-container"
       centred
     >
       <Modal.Header>
         <Modal.Title>Modal title</Modal.Title>
       </Modal.Header>
       <Modal.Body>
         <input
           type="task"
           placeholder="Edit task"
           defaultValue={task.description}
           onChange={handleEdit}
         />
       </Modal.Body>
       <Modal.Footer>
         <Button variant="secondary" onClick={handleClose}>
           Close
         </Button>
         <Button variant="primary" onClick={handleSave}>
           Save changes
         </Button>
       </Modal.Footer>
     </Modal>
   </div>
 );
}
export default Task;