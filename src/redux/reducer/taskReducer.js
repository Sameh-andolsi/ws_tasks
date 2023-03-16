import { v4 as uuidv4 } from "uuid";
import { ADD_Task ,CHANGE_DONE,EDIT_Task, RESET} from "../constants/action-type";
const initialState = {
  tasksList: [
    {
      id: uuidv4(),
      description: "Start learning a new language",
      isDone: false,
    },
    {
      id: uuidv4(),
      description: "Practice yoga for 30 minutes",
      isDone: false,
    },
    {
      id: uuidv4(),
      description: "Finish reading a book",
      isDone: false,
    },
    {
      id: uuidv4(),
      description: "Watch a movie with friends",
      isDone: false,
    },
    {
      id: uuidv4(),
      description: "Plan a vacation for the summer",
      isDone: false,
    },
  ],
};

function taskReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_Task:
      return {
        tasksList: [...state.tasksList,{ id: uuidv4(), description: payload, isDone: false }]
      };
    case EDIT_Task:
      return {
        tasksList: state.tasksList.map((task) => {
          if (task.id === payload.id) {
            return { ...task, description: payload.edited };
          } else {
            return task;
          }
        }),
      };
    case CHANGE_DONE:
      return {
        tasksList: state.tasksList.map((task) =>
          task.id === payload ? { ...task, isDone: !task.isDone } : task
        ),
      };
    case RESET:
      return {
tasksList:state.tasksList.map((task)=>task  ? {...task ,isDone:false}: task )
       
      };
    default:
      return state;
  }
}
export default taskReducer;
