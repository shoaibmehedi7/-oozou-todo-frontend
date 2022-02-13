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
} from "../action/subtaskActionType";

const initState = {
  loading: false,
  data: [],
  error: "",
};

export function subtaskReducer(state = initState, action) {
  switch (action.type) {
    case GET_ALL_SUBTASK_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_SUBTASK_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case GET_ALL_SUBTASK_ERROR:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };

    default:
      return state;
  }
}

export function createSubtaskReducer(state = initState, action) {
  switch (action.type) {
    case ADD_SUBTASK_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_SUBTASK_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: "",
      };
    case ADD_SUBTASK_ERROR:
      return {
        ...state,
        data: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

export function updateSubtaskReducer(state =initState, action) {
  switch (action.type) {
    case UPDATE_SUBTASK_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_SUBTASK_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        data: action.payload,
      };
      case UPDATE_SUBTASK_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
