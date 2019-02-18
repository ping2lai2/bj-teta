import { GET_TASKS, CHANGE_TASK } from '../actions';

const initialState = {
  tasks: [],
};

export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
  case GET_TASKS: {
    return state;
  }
  case CHANGE_TASK: {
    return state;
  }

  default: {
    return state;
  }
  }
};
