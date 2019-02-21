import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const TasksManager = ({ itemsList, isLoggedIn }) => (
  <div className="tasks-manager">
    {itemsList.map(task => (
      <div key={task.id} className="task">
        <div className="task__inner">
          <div className="task__item">
            <span className="task__item-header">id:</span>
            {task.id}
          </div>
          <div className="task__item">
            <span className="task__item-header">username:</span>
            {task.username}
          </div>
          <div className="task__item">
            <span className="task__item-header">email:</span>
            {task.email}
          </div>
          <div className="task__item">
            <span className="task__item-header">text:</span>
            {task.text}
          </div>
          <div className="task__item">
            <span className="task__item-header">status:</span>
            {task.status}
          </div>
          <div className="task__buttons-field">
            {isLoggedIn && <div className="task__button">изменить</div>}
          </div>
        </div>
      </div>
    ))}
  </div>
);
TasksManager.propTypes = {
  itemsList: PropTypes.array.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};

export default TasksManager;
