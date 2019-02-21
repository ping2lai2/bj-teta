import {
  GET_TASKS_REQUEST,
  GET_TASKS_SUCCESS,
  GET_TASKS_FAIL,
  POST_TASK_REQUEST,
  POST_TASK_SUCCESS,
  POST_TASK_FAIL,
  EDIT_TASK_REQUEST,
  EDIT_TASK_SUCCESS,
  EDIT_TASK_FAIL,
} from '../constants/tasks';

//TODO: EDIT === POST?
const initialState = {
  isFetching: false,
  page: 1,
  itemsList: [],
  sortField: 'username',
  sortDirection: 'asc',
  errorMessage: '',
  reportMessage: '',
};

export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
  case GET_TASKS_REQUEST: {
    return {
      ...state,
      isFetching: true,
      errorMessage: '',
    };
  }
  case GET_TASKS_SUCCESS: {
    const { message, page, sortField, sortDirection } = action;
    return {
      ...state,
      isFetching: false,
      itemsList: message.tasks,
      page,
      sortField,
      sortDirection,
      totalItemsCount: action.message.total_task_count,
    };
  }
  case GET_TASKS_FAIL: {
    return {
      ...state,
      isFetching: false,
      errorMessage: action.message,
    };
  }
  case POST_TASK_REQUEST: {
    return {
      ...state,
      errorMessage: '',
      reportMessage: '',
    };
  }
  case POST_TASK_SUCCESS: {
    return {
      ...state,
      reportMessage: 'создана задача с id:' + action.message.id,
    };
  }
  case POST_TASK_FAIL: {
    return {
      ...state,
      reportMessage: Object.values(action.error).reduce(
        (accum, curVal) => accum + curVal
      ),
    };
  }
  case EDIT_TASK_REQUEST: {
    return {
      ...state,
    };
  }
  case EDIT_TASK_SUCCESS: {
    return {
      ...state,
    };
  }
  case EDIT_TASK_FAIL: {
    return {
      ...state,
    };
  }

  default: {
    return state;
  }
  }
};
