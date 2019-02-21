import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const InputField = ({inputRef, className, fieldName, ...rest }) => (
  <div className={`input-field ${className ? className : ''}`}>
    <span className="input-field__name">{fieldName}</span>
    <input className="input-field__item" ref={inputRef} {...rest} />
  </div>
);

InputField.propTypes = {
  className: PropTypes.string,
  fieldName: PropTypes.string,
  inputRef: PropTypes.func,
};

export default InputField;
