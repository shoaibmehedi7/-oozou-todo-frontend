import { combineReducers } from "redux";
import { createSubtaskReducer, subtaskReducer, updateSubtaskReducer } from "./subtask/reducer/subtaskReducer";
import { createTodoReducer, todoReducer,updateTodoReducer } from "./todo/reducer/todoReducer";
const rootReducer = combineReducers({
  todo: todoReducer,
  createTodo: createTodoReducer,
  updateTodo: updateTodoReducer,
  subtask: subtaskReducer,
  createSubtask:createSubtaskReducer,
  updateSubtask:updateSubtaskReducer

})

export default rootReducer;
