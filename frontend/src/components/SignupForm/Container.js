import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SignupForm from './Presenter';

class Container extends Component {
    state = {
        email: "",
        name: "",
        username: "",
        password: ""
    }
    static propTypes = {
        facebookLogin: PropTypes.func.isRequired,
        createAccount: PropTypes.func.isRequired
    }  

    render() {
        const { email, name, username, password } = this.state;
        const { _handleChange, _handleSubmit, _handleFacebookLogin } = this;
        return <SignupForm 
                    emailValue={email}
                    nameValue={name}
                    usernameValue={username}
                    passwordValue={password}
                    handleChange={_handleChange}
                    handleSubmit={_handleSubmit}
                    handleFacebookLogin={_handleFacebookLogin}
                />
    }

    _handleChange = e => {
        const {target: {value, name} } = e;
        this.setState({
            [name]: value
        });
    }

    _handleSubmit = e => {
        const { createAccount } = this.props;
        const { email, name, username, password } = this.state;
        e.preventDefault();
        createAccount(username, password, email, name);
        
    }
    
    _handleFacebookLogin = response => {
        const { facebookLogin } = this.props;
        facebookLogin(response.accessToken);
    }
}

export default Container;