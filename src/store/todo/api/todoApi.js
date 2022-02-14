import { toast } from "react-toastify";
import { authAxios } from "../../../utils/axiosWrapper";
import {apiEndPoint} from "../../../constants/endpoints";
import {
  addTodoError,
  addTodoRequest,
  addTodoSuccess,
  getAllTodoError,
  getAllTodoRequest,
  getAllTodoSuccess,
  updateTodoError,
  updateTodoRequest,
  updateTodoSuccess,
} from "../action/todoActions";

export function getAllTodo() {
  return (dispatch) => {
    dispatch(getAllTodoRequest());
    authAxios
      .get(apiEndPoint.GET_TODOS)
      .then((response) => {
        dispatch(getAllTodoSuccess(response.data.data));
      })
      .catch((error) => {
        dispatch(getAllTodoError(error.response.data.message));
        toast.error(error.response.data.message);
      });
  };
}

export function createTodo(data) {
  return (dispatch) => {
    dispatch(addTodoRequest());
    authAxios
      .post(apiEndPoint.CREATE_TODO, data)
      .then((response) => {
        dispatch(addTodoSuccess(response.data.data));
      })
      .catch((error) => {
        dispatch(addTodoError(error.response.data.message));
        toast.error(error.response.data.message);
      });
  };
}

export function updateTodo(data) {
  return (dispatch) => {
    dispatch(updateTodoRequest());
    authAxios
      .post(apiEndPoint.UPDATE_TODO, data)
      .then((response) => {
        dispatch(updateTodoSuccess(response.data.data));
      })
      .catch((error) => {
        dispatch(updateTodoError(error.response.data.message));
        toast.error(error.response.data.message);
      });
  };
}
