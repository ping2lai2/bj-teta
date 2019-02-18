import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

class Nav extends React.Component {
  _onClick = event => {
    const { tasks, getTasks } = this.props;
    const field = event.currentTarget.dataset.field;
    const sortDirection = tasks.sortDirection === 'asc' ? 'desc' : 'asc';
    getTasks(field, sortDirection);
  };
  renderButtons = () => {
    const fieldsList = ['username', 'email', 'status'];
    const {
      tasks: { sortField, sortDirection },
    } = this.props;
    return fieldsList.map((item, index) => (
      <div
        key={index}
        onClick={this._onClick}
        data-field={item}
        className={`button field${item === sortField ? ' field_active' : ''}`}
      >
        {item === sortField
          ? sortDirection === 'asc'
            ? item + ' ↑'
            : item + ' ↓'
          : item}
      </div>
    ));
  };
  render() {
    return (
      <div className="nav">
        <div className="admin">
          {this.props.isAdmin ? (
            <div className="button">выйти</div>
          ) : (
            <div className="button">админ</div>
          )}
        </div>
        <div className="nav__inner">
          <div className="sort-fields">
            <span className="description">способы сортировки:</span>
            {this.renderButtons()}
          </div>
          <div className="button">добавить новую карту</div>
        </div>
      </div>
    );
  }
}

Nav.propTypes = {
  isAdmin: PropTypes.bool.isRequired,
  tasks: PropTypes.object.isRequired,
  getTasks: PropTypes.func.isRequired,
};

export default Nav;
