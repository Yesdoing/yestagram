import React, { Component } from "react";
import PropTypes from "prop-types";
import SignupForm from "./Presenter";

class Container extends Component {
  state = {
    email: "",
    name: "",
    username: "",
    password: "",
    error: {
      name: "",
      detail: ""
    }
  };
  static propTypes = {
    facebookLogin: PropTypes.func.isRequired,
    createAccount: PropTypes.func.isRequired
  };

  render() {
    const { email, name, username, password, error } = this.state;
    const { _handleChange, _handleSubmit, _handleFacebookLogin } = this;
    return (
      <SignupForm
        emailValue={email}
        nameValue={name}
        usernameValue={username}
        passwordValue={password}
        handleChange={_handleChange}
        handleSubmit={_handleSubmit}
        handleFacebookLogin={_handleFacebookLogin}
        error={error}
      />
    );
  }

  _handleChange = e => {
    const {
      target: { value, name }
    } = e;
    this.setState({
      [name]: value
    });
  };

  _handleSubmit = e => {
    const { createAccount } = this.props;
    const { email, name, username, password } = this.state;
    e.preventDefault();

    if (
      !/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i.test(
        email
      )
    ) {
      const setError = {
        name: "eamil",
        detail: "사용가능한 email을 적어주세요"
      };
      this.setState({ error: setError });
      return;
    }

    if (name.length < 1 || name.length > 40) {
      const setError = { name: "name", detail: "이름을 1~40자로 입력하세요." };
      this.setState({ error: setError });
      return;
    }

    if (!/^[a-z0-9-_]{3,16}$/.test(username)) {
      const setError = {
        name: "username",
        detail: "아이디는 3~16자의 영소문자, 숫자, - _ 가 허용됩니다."
      };
      this.setState({ error: setError });
      return;
    }

    if (!/^[a-z0-9-_]{8,20}$/.test(password)) {
      const setError = {
        name: "password",
        detail:
          "비밀번호는 최소 8자 이상이어야 하며, 영문과 숫자로 구성되어야 합니다."
      };
      this.setState({ error: setError });
      return;
    }

    this.setState({
      error: {
        name: "",
        detail: ""
      }
    });

    createAccount(username, password, email, name);
  };

  _handleFacebookLogin = response => {
    const { facebookLogin } = this.props;
    facebookLogin(response.accessToken);
  };
}

export default Container;
