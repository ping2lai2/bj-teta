import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Nav = ({}) => (
  <div className="nav">
    <div className="admin">
      <div className="button">админ</div>
    </div>
    <div className="nav__inner">
      <div className="sort-fields">
        <span className="description">способы сортировки:</span>
        <div className="button field">username</div>
        <div className="button field">email</div>
        <div className="button field">status</div>
      </div>
      <div className="button">добавить новую карту</div>
    </div>
  </div>
);

Nav.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default Nav;
