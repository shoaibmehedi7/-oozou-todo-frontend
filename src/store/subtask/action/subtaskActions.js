import {
  ADD_SUBTASK_ERROR,
  ADD_SUBTASK_REQUEST,
  ADD_SUBTASK_SUCCESS,
  GET_ALL_SUBTASK_ERROR,
  GET_ALL_SUBTASK_REQUEST,
  GET_ALL_SUBTASK_SUCCESS,
  UPDATE_SUBTASK_ERROR,
  UPDATE_SUBTASK_REQUEST,
  UPDATE_SUBTASK_SUCCESS,
} from "./subtaskActionType";

export function getAllSubtaskSuccess(data) {
  return {
    type: GET_ALL_SUBTASK_SUCCESS,
    payload: data,
  };
}

export function addSubtaskSuccess(data) {
  return {
    type: ADD_SUBTASK_SUCCESS,
    payload: data,
  };
}

export function updateSubtaskSuccess(data) {
  return {
    type: UPDATE_SUBTASK_SUCCESS,
    payload: data,
  };
}


export function getAllSubtaskRequest(data) {
  return {
    type: GET_ALL_SUBTASK_REQUEST,
    payload: data,
  };
}

export function addSubtaskRequest(data) {
  return {
    type: ADD_SUBTASK_REQUEST,
    payload: data,
  };
}

export function updateSubtaskRequest(data) {
  return {
    type: UPDATE_SUBTASK_REQUEST,
    payload: data,
  };
}



export function getAllSubtaskError(data) {
  return {
    type: GET_ALL_SUBTASK_ERROR,
    payload: data,
  };
}

export function addSubtaskError(data) {
  return {
    type: ADD_SUBTASK_ERROR,
    payload: data,
  };
}

export function updateSubtaskError(data) {
  return {
    type: UPDATE_SUBTASK_ERROR,
    payload: data,
  };
}
