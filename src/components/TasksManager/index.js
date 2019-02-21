import React from 'react';
import PropTypes from 'prop-types';

import { statusToBool } from '../../utils';

import './style.css';

const TasksManager = ({ itemsList, isLoggedIn, openTask }) => (
  <div className="tasks-manager">
    {itemsList.map((task, index) => (
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
            <input type="checkbox" checked={statusToBool(task.status)} disabled />
          </div>
          <div className="task__buttons-field">
            {isLoggedIn && (
              <div className="task__button" data-index={index} onClick={openTask}>
                изменить
              </div>
            )}
          </div>
        </div>
      </div>
    ))}
  </div>
);
TasksManager.propTypes = {
  itemsList: PropTypes.array.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  openTask: PropTypes.func.isRequired,
};

export default TasksManager;
