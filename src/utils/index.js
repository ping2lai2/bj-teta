export const enhancedFetch = (URLpattern, fetchOptions) => {
  return fetch(URLpattern, fetchOptions).then(response =>
    response
      .json()
      .then(data =>
        data.status !== 'ok'
          ? Promise.reject((data && data.message) || response.status)
          : data.message
      )
  );
};

export const statusToBool = status => (status === 10 ? true : false);

export const boolToStatus = bool => (bool ? 10 : 0);
