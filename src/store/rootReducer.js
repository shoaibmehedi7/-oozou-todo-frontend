import { combineReducers } from "redux";
import { createTodoReducer, todoReducer,updateTodoReducer } from "./todo/reducer/todoReducer";
const rootReducer = combineReducers({
  todo: todoReducer,
  createTodo: createTodoReducer,
  updateTodo: updateTodoReducer,

})

export default rootReducer;
