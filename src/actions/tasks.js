import { async } from 'q';

export const GET_TASKS_REQUEST = 'GET_TASKS_REQUEST';
export const GET_TASKS_SUCCESS = 'GET_TASKS_SUCCESS';
export const GET_TASKS_FAIL = 'GET_TASKS_FAIL';

const baseURL = 'https://uxcandy.com/~shapoval/test-task-backend';

const fetchOptions = {
  method: 'GET',
  headers: { 'Content-Type': 'application/json' },
};

function enhancedFetch(URLpattern, fetchOptions) {
  return fetch(URLpattern, fetchOptions).then(response =>
    response
      .json()
      .then(data =>
        data.status !== 'ok'
          ? Promise.reject((data && data.message) || response.status)
          : data.message
      )
  );
}
export const getTasks = (
  sortField = 'username',
  sortDirection = 'asc',
  page = 1
) => async dispatch => {
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
    });
  } catch (error) {
    dispatch({
      type: GET_TASKS_FAIL,
      error,
    });
  }
};

export const POST_TASK_REQUEST = 'POST_TASK_REQUEST';
export const POST_TASK_SUCCESS = 'POST_TASK_SUCCESS';
export const POST_TASK_FAIL = 'POST_TASK_FAIL';

export const postTask = newCardData => async dispatch => {
  const { username = 'test', email = 'test@gmail.com', text = 'test' } = newCardData;
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
  } catch (error) {
    dispatch({
      type: POST_TASK_FAIL,
      error,
    });
  }
};

export const EDIT_TASK_REQUEST = 'EDIT_TASK_REQUEST';
export const EDIT_TASK_SUCCESS = 'EDIT_TASK_SUCCESS';
export const EDIT_TASK_FAIL = 'EDIT_TASK_FAIL';