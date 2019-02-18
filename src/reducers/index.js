import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { tasksReducer } from './tasksReducer';

export const rootReducer = history =>
  combineReducers({
    tasks: tasksReducer,
    router: connectRouter(history),
  });
