import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Button = ({ children, className, ...rest }) => (
  <button className={`button ${className ? className : ''}`} {...rest}>
    {children}
  </button>
);

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
};

export default Button;
