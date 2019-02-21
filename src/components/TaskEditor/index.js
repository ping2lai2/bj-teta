import React from 'react';

import PropTypes from 'prop-types';

import Popup from 'reactjs-popup';
import Button from '../../components/Button';
import Container from '../../components/Container';
import InputField from '../../components/InputField';
import { statusToBool } from '../../utils/index';

import './style.css';

const popupStyles = {
  maxWidth: 360,
  minWidth: 300,
  borderRadius: 2,
  height: 420,
  boxShadow: '0 0 2px rgba(0, 0, 0, 0.7)',
};

class TaskEditor extends React.Component {
  constructor(props) {
    super(props);
    this.text = React.createRef();
    this.status = React.createRef();
  }
  editTask = event => {
    event.preventDefault();
    const { text, status } = this;
    const { editTask, openedTask, openedTaskIndex } = this.props;
    editTask({ text: text.value, status: status.checked, id: openedTask.id, openedTaskIndex });
  };

  render() {
    const {
      openedTask: { id, username, email, text, status },
      errorMessage,
      reportMessage,
      closeTask,
      clearMessages,
    } = this.props;

    return (
      <Popup open={true} modal closeOnDocumentClick contentStyle={popupStyles}>
        {close => (
          <form
            onSubmit={event => this.editTask(event)}
            className="task-editor"
          >
            <div className="task-editor__header">
              <div className="task-editor__description">заполните поля</div>
              <Button
                className="task-editor__button-close"
                onClick={() => {
                  close();
                  closeTask();
                  clearMessages();
                }}
              >
                ❌
              </Button>
            </div>
            <Container className="task-editor__form">
              <InputField disabled value={id} fieldName={'id:'} />
              <InputField disabled value={username} fieldName={'username:'} />
              <InputField disabled value={email} fieldName={'email:'} />
              <InputField
                data-field="text"
                required
                defaultValue={text}
                inputRef={refElem => (this.text = refElem)}
                fieldName={'text:'}
              />
              <InputField
                data-field="status"
                type="checkbox"
                defaultChecked={statusToBool(status)}
                inputRef={refElem => (this.status = refElem)}
                fieldName={'status:'}
              />
            </Container>
            {errorMessage}
            {reportMessage}
            <div className="task-editor__buttons-field">
              <Button className="task-editor__button-request">
                редактировать
              </Button>
            </div>
          </form>
        )}
      </Popup>
    );
  }
}

TaskEditor.propTypes = {
  openedTask: PropTypes.object.isRequired,
  errorMessage: PropTypes.string,
  reportMessage: PropTypes.string,
  closeTask: PropTypes.func.isRequired,
  editTask: PropTypes.func.isRequired,
  clearMessages: PropTypes.func.isRequired,
  openedTaskIndex: PropTypes.string.isRequired,
};

export default TaskEditor;
