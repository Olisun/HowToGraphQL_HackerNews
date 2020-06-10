import React, { Component } from 'react';
import { AUTH_TOKEN } from '../constants';

class Login extends Component {
  state = {
    login: true,  // for toggling btw signUp
    email: '',
    password: '',
    name: ''
  }

  render() {
    const { login, email, password, name } = this.state;
    return (
      <div>
        <h4 className="mv3">{login ? 'Login' : 'Sign Up'}</h4>
        <div className="flex flex-column">
          {!login && (
            <input
              value={name}
              onChange={event => this.setState({ name: event.target.value })}
              type="text"
              placeholder="Your name"
            />
          )}
          <input
            value={email}
            onChange={event => this.setState({ email: event.target.value })}
            type="text"
            placeholder="Your email address"
          />
          <input
            value={password}
            onChange={event => this.setState({ password: event.target.value })}
            type="text"
            placeholder="Enter your password"
          />
        </div>
        <div className="flex mt3">
          <div
            className="pointer mr2 button"
            onClick={() => this._confirm()}
          >
            {login ? 'login' : 'create account'}
          </div>
          <div
            className="pointer button"
            onClick={() => this.setState({ login: !login })}
          >
            {login ? 'create an account' : 'already have an account'}
          </div>
        </div>
      </div>
    )
  }

  _confirm = async () => {
    // TODO:
  }

  _saveUserData = token => {
    localStorage.setItem(AUTH_TOKEN, token)
  }
}

export default Login;

