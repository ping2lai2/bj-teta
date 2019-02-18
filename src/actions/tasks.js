export const GET_TASKS_REQUEST = 'GET_TASKS_REQUEST';
export const GET_TASKS_SUCCESS = 'GET_TASKS_SUCCESS';
export const GET_TASKS_FAIL = 'GET_TASKS_FAIL';

const baseURL = 'https://uxcandy.com/~shapoval/test-task-backend';

const fetchOptions = {
  method: 'GET',
  headers: { 'Content-Type': 'application/json' },
};

export const getTasks = (
  sortField = 'username',
  sortDirection = 'asc',
  page = 1
) => async (dispatch) => {
  try {
    const query = `${baseURL}/?developer=Name&sort_field=${sortField}&sort_direction=${sortDirection}&page${page}`;
    let response = await fetch(query, fetchOptions).then(response =>
      response.json()
    );
    console.log(response);
    return response;
    // return [...response];
  } catch (error) {
    throw new Error(error);
  }
};

export const POST_TASKS_REQUEST = 'POST_TASKS_REQUEST';
export const POST_TASKS_SUCCESS = 'POST_TASKS_SUCCESS';
export const POST_TASKS_FAIL = 'POST_TASKS_FAIL';
