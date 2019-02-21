import React from 'react';
import PropTypes from 'prop-types';

import Popup from 'reactjs-popup';

import Button from '../../components/Button';
import InputField from '../../components/InputField';
import Container from '../../components/Container';

import './style.css';

const popupStyles = { maxWidth: 500, minWidth: 300, borderRadius: 2 };

class Login extends React.Component {
  state = {
    name: 'admin',
    password: '123',
  };
  _onChange = event => {
    this.setState({
      [event.currentTarget.dataset.type]: event.currentTarget.value,
    });
  };

  login = (event) => {
    event.preventDefault();
    const { name, password } = this.state;
    this.props.login(name, password);
  };

  render() {
    const { name, password } = this.state;
    const { user } = this.props;
    return user.name ? (
      <Button className="login__button" onClick={this.props.logout}>
        выход
      </Button>
    ) : (
      <Popup
        trigger={<Button className="login__button">вход</Button>}
        modal
        closeOnDocumentClick
        contentStyle={popupStyles}
      >
        {close => (
          <form className="login" onSubmit={(event) => this.login(event)}>
            <Container>
              <Button className="login__close-button" onClick={close}>
                ❌
              </Button>
            </Container>
            <InputField
              data-type="name"
              fieldName={'имя'}
              value={name}
              required
              onChange={this._onChange}
            />
            <InputField
              data-type="password"
              fieldName={'пароль'}
              value={password}
              required
              onChange={this._onChange}
            />
            <Button className="login__request-button">
              вход
            </Button>
          </form>
        )}
      </Popup>
    );
  }
}

Login.propTypes = {
  user: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
};

export default Login;
