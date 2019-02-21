import React from 'react';

import PropTypes from 'prop-types';

import Popup from 'reactjs-popup';
import Button from '../../components/Button';
import Container from '../../components/Container';
import InputField from '../../components/InputField';

import './style.css';

const popupStyles = {
  maxWidth: 360,
  minWidth: 300,
  borderRadius: 2,
  height: 420,
  boxShadow: '0 0 2px rgba(0, 0, 0, 0.7)',
};

class TaskCreator extends React.Component {
  constructor(props) {
    super(props);
    this.username = React.createRef();
    this.email = React.createRef();
    this.text = React.createRef();
  }
  createTask = event => {
    event.preventDefault();
    this.setState({
      message: '',
    });
    const { username, email, text } = this;
    this.props.postTask({
      username: username.value,
      email: email.value,
      text: text.value,
    });
  };

  render() {
    const {
      tasks: { errorMessage, reportMessage },
    } = this.props;

    return (
      <Popup
        trigger={
          <Button className="task-creator__button">доавить новую карту</Button>
        }
        modal
        closeOnDocumentClick
        contentStyle={popupStyles}
      >
        {close => (
          <form
            onSubmit={event => this.createTask(event)}
            className="task-creator"
          >
            <div className="task-creator__header">
              <div className="task-creator__description">заполните поля</div>
              <Button className="task-creator__button-close" onClick={close}>
                ❌
              </Button>
            </div>
            <Container className="task-creator__form">
              <InputField
                data-field="username"
                required
                inputRef={refElem => (this.username = refElem)}
                fieldName={'username:'}
              />
              <InputField
                data-field="email"
                required
                inputRef={refElem => (this.email = refElem)}
                fieldName={'email:'}
              />
              <InputField
                data-field="text"
                required
                inputRef={refElem => (this.text = refElem)}
                fieldName={'text:'}
              />
            </Container>
            {errorMessage}
            {reportMessage}
            <div className="task-creator__buttons-field">
              <Button className="task-creator__button-request">создать</Button>
            </div>
          </form>
        )}
      </Popup>
    );
  }
}

TaskCreator.propTypes = {
  tasks: PropTypes.object.isRequired,
  postTask: PropTypes.func.isRequired,
};

export default TaskCreator;
