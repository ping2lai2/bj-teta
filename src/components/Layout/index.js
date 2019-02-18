import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Layout = ({ children }) => (
  <div className="layout">
    <div className="layout__inner">{children}</div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default Layout;
