import {
  GET_TASKS_FAIL,
  GET_TASKS_SUCCESS,
  GET_TASKS_REQUEST,
  POST_TASK_FAIL,
  POST_TASK_SUCCESS,
  POST_TASK_REQUEST,
} from '../constants/tasks';
import { baseURL } from '../constants/urlParts';
import enhancedFetch from '../utils/enhancedFetch';


export const getTasks = (
  sortField = 'username',
  sortDirection = 'asc',
  page = 1
) => async dispatch => {
  const fetchOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };
  dispatch({
    type: GET_TASKS_REQUEST,
  });
  try {
    const URLpattern =
      baseURL +
      '/?developer=Name&sort_field=' +
      sortField +
      '&sort_direction=' +
      sortDirection +
      '&page=' +
      page;
    const message = await enhancedFetch(URLpattern, fetchOptions);
    dispatch({
      type: GET_TASKS_SUCCESS,
      message,
      page,
      sortField,
      sortDirection,
    });
  } catch (error) {
    dispatch({
      type: GET_TASKS_FAIL,
      error,
    });
  }
};

export const postTask = newCardData => async dispatch => {
  const {
    username = 'test',
    email = 'test@gmail.com',
    text = 'test',
  } = newCardData;
  let form = new FormData();
  form.append('username', username);
  form.append('email', email);
  form.append('text', text);
  const fetchOptions = {
    method: 'POST',
    body: form,
  };
  dispatch({
    type: POST_TASK_REQUEST,
  });
  try {
    const URLpattern = baseURL + '/create?developer=Name';
    const message = await enhancedFetch(URLpattern, fetchOptions);
    dispatch({
      type: POST_TASK_SUCCESS,
      message,
    });
    console.log(message);
  } catch (error) {
    console.log(error);
    dispatch({
      type: POST_TASK_FAIL,
      error,
    });
  }
};

