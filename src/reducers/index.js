import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { tasksReducer } from './tasksReducer';
import { userReducer } from './userReducer';

export const rootReducer = history =>
  combineReducers({
    tasks: tasksReducer,
    user: userReducer,
    router: connectRouter(history),
  });
