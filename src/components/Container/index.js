import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Container = ({ children }) => <div className="container">{children}</div>;

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),
};

export default Container;
