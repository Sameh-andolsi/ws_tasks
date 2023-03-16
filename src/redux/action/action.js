import { ADD_Task, EDIT_Task, CHANGE_DONE,RESET } from "../constants/action-type";

export const addTask =(payload)=> {
  
return{
    type:ADD_Task,
    payload:payload,
};

};

export const editTask = (payload) => {
  console.log(payload);
  return {
    type: EDIT_Task,
    payload: payload,
  };
};
export const changeDone = (payload) => {
  console.log(payload);
  return {
    type: CHANGE_DONE,
    payload: payload,
  };
};
export const reset = (payload) => {
  console.log(payload);
  return {RESET,
    payload: payload,
  };
};