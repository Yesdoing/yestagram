import React, { Component } from "react";
import PropTypes from 'prop-types';
import LoginForm from "./Presenter";

class Container extends Component {
  state = {
    username: "",
    password: ""
  };

  static propTypes = {
      facebookLogin: PropTypes.func.isRequired,
      usernameLogin: PropTypes.func.isRequired
  }

  render() {
    const { username, password } = this.state;
    const { _handleChangeValue, _handleSubmit, _handleFacebookLogin } = this;
    return (
      <LoginForm
        usernameValue={username}
        passwordValue={password}
        handleChangeValue={_handleChangeValue}
        handleSubmit={_handleSubmit}
        handleFacebookLogin={_handleFacebookLogin}
      />
    );
  }

  _handleChangeValue = e => {
    const {
      target: { value, name }
    } = e;
    this.setState({
      [name]: value
    });
  };
  _handleSubmit = e => {
    const { usernameLogin } = this.props;
    const { username, password } = this.state;
    e.preventDefault();
    usernameLogin( username, password );
  };
  _handleFacebookLogin = response => {
    const { facebookLogin } = this.props;
    facebookLogin(response.accessToken);
  };
}

export default Container;
