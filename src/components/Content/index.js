import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Content = ({ children }) => <div className="content">{children}</div>;

Content.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default Content;
