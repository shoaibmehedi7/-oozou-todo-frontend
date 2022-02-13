import {
  ADD_TODO_ERROR,
  ADD_TODO_REQUEST,
  ADD_TODO_SUCCESS,
  GET_ALL_TODO_ERROR,
  GET_ALL_TODO_REQUEST,
  GET_ALL_TODO_SUCCESS,
  UPDATE_TODO_ERROR,
  UPDATE_TODO_REQUEST,
  UPDATE_TODO_SUCCESS,
} from "./todoActionType";

export function getAllTodoSuccess(data) {
  return {
    type: GET_ALL_TODO_SUCCESS,
    payload: data,
  };
}

export function addTodoSuccess(data) {
  return {
    type: ADD_TODO_SUCCESS,
    payload: data,
  };
}

export function updateTodoSuccess(data) {
  return {
    type: UPDATE_TODO_SUCCESS,
    payload: data,
  };
}


export function getAllTodoRequest(data) {
  return {
    type: GET_ALL_TODO_REQUEST,
    payload: data,
  };
}

export function addTodoRequest(data) {
  return {
    type: ADD_TODO_REQUEST,
    payload: data,
  };
}

export function updateTodoRequest(data) {
  return {
    type: UPDATE_TODO_REQUEST,
    payload: data,
  };
}



export function getAllTodoError(data) {
  return {
    type: GET_ALL_TODO_ERROR,
    payload: data,
  };
}

export function addTodoError(data) {
  return {
    type: ADD_TODO_ERROR,
    payload: data,
  };
}

export function updateTodoError(data) {
  return {
    type: UPDATE_TODO_ERROR,
    payload: data,
  };
}
