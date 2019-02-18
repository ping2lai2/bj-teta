export default (URLpattern, fetchOptions) => {
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
