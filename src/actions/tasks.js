import {
  GET_TASKS_FAIL,
  GET_TASKS_SUCCESS,
  GET_TASKS_REQUEST,
  POST_TASK_FAIL,
  POST_TASK_SUCCESS,
  POST_TASK_REQUEST,
  EDIT_TASK_FAIL,
  EDIT_TASK_SUCCESS,
  EDIT_TASK_REQUEST,
  CLEAR_MESSAGES,
} from '../constants/tasks';

import { baseURL, token } from '../constants/urlParts';
import { enhancedFetch } from '../utils';

import md5 from 'md5';

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
    const { message } = await enhancedFetch(URLpattern, fetchOptions);
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
      message: error.message,
    });
  }
};

export const postTask = task => async dispatch => {
  const { username, email, text } = task;
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
    const { message } = await enhancedFetch(URLpattern, fetchOptions);
    dispatch({
      type: POST_TASK_SUCCESS,
      message,
    });
  } catch (error) {
    dispatch({
      type: POST_TASK_FAIL,
      error,
    });
  }
};

export const editTask = task => async dispatch => {
  const { id, text, openedTaskIndex, status } = task;
  const dbstatus = status ? 10 : 0;
  const signature =
    encodeURIComponent('status') +
    '=' +
    encodeURIComponent(dbstatus) +
    '&' +
    encodeURIComponent('text') +
    '=' +
    encodeURIComponent(text) +
    '&' +
    encodeURIComponent('token') +
    '=' +
    encodeURIComponent(token);

  const md5signature = md5(signature);

  let form = new FormData();
  form.append('status', dbstatus);
  form.append('text', text);
  form.append('token', token);
  form.append('signature', md5signature);

  const fetchOptions = {
    method: 'POST',
    body: form,
  };
  dispatch({
    type: EDIT_TASK_REQUEST,
  });
  try {
    const URLpattern = baseURL + '/edit/' + id + '/?developer=Name';
    await enhancedFetch(URLpattern, fetchOptions);
    dispatch({
      type: EDIT_TASK_SUCCESS,
      openedTaskIndex,
      text,
      status,
      id,
    });
  } catch (error) {
    dispatch({
      type: EDIT_TASK_FAIL,
      error,
    });
  }
};

export const clearMessages = () => ({
  type: CLEAR_MESSAGES,
});
