import React from 'react';
import PropTypes from 'prop-types';

import Popup from 'reactjs-popup';

import Button from '../../components/Button';
import Container from '../../components/Container';

import './style.css';
class Login extends React.Component {
  state = {
    name: 'admin',
    password: '123',
  };
  _onChange = event => {
    this.setState({
      [event.currentTarget.dataset.name]: event.currentTarget.value,
    });
  };

  login = () => {
    const { name, password } = this.state;
    this.props.login(name, password);
  };
  render() {
    const { name, password } = this.state;
    const { user } = this.props;
    return user.name ? (
      <Button className="login-button" onClick={this.props.logout}>
        выход
      </Button>
    ) : (
      <Popup
        className="popup"
        trigger={<Button className="login-button">вход</Button>}
        modal
        closeOnDocumentClick
      >
        {close => (
          <div className="login">
            <Container>
              <Button className="login__button-close" onClick={close}>
                ❌
              </Button>
            </Container>
            <div className="login__item">
              <span className="login__header">логин</span>
              <input
                className="login__input"
                data-type="name"
                required
                value={name}
                onChange={this._onChange}
              />
            </div>
            <div className="login__item">
              <span className="login__header">пароль</span>
              <input
                className="login__input"
                data-type="password"
                required
                value={password}
                onChange={this._onChange}
              />
            </div>
            <Button className="login__button-request" onClick={this.login}>
              вход
            </Button>
          </div>
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
