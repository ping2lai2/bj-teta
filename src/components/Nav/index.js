import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../components/Button';

import './style.css';

class Nav extends React.Component {
  _onClick = event => {
    const { tasks, getTasks } = this.props;
    const field = event.currentTarget.dataset.field;
    const sortDirection =
      field === tasks.sortField
        ? tasks.sortDirection === 'asc'
          ? 'desc'
          : 'asc'
        : 'asc';
    getTasks(field, sortDirection);
  };
  renderButtons = () => {
    const fieldsList = ['username', 'email', 'status'];
    const {
      tasks: { sortField, sortDirection },
    } = this.props;
    return fieldsList.map((item, index) => (
      <Button
        key={index}
        onClick={this._onClick}
        data-field={item}
        className={`field${item === sortField ? ' field_active' : ''}`}
      >
        {item === sortField
          ? sortDirection === 'asc'
            ? item + ' ↑'
            : item + ' ↓'
          : item}
      </Button>
    ));
  };
  render() {
    return (
      <div className="nav">
        <div className="sort-fields">
          <span className="description">способы сортировки:</span>
          {this.renderButtons()}
        </div>
        <div className="button">добавить новую карту</div>
      </div>
    );
  }
}

Nav.propTypes = {
  tasks: PropTypes.object.isRequired,
  getTasks: PropTypes.func.isRequired,
};

export default Nav;
