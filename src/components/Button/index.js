import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Button = ({ children, className, ...rest }) => <div className={`button ${className}`} {...rest}>{children}</div>;

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.string,
  ]),
};

export default Button;
