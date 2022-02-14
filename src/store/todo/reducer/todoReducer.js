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
} from "../action/todoActionType";

const initState = {
  loading: false,
  data: [],
  error: "",
};

export function todoReducer(state = initState, action) {
  switch (action.type) {
    case GET_ALL_TODO_REQUEST:
      return {
        ...state,
        loading: true,
        data:[],
        error: "",
      };
    case GET_ALL_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case GET_ALL_TODO_ERROR:
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

export function createTodoReducer(state = initState, action) {
  switch (action.type) {
    case ADD_TODO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_TODO_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: "",
      };
    case ADD_TODO_ERROR:
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

export function updateTodoReducer(state =initState, action) {
  switch (action.type) {
    case UPDATE_TODO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        data: action.payload,
      };
      case UPDATE_TODO_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
