import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SignupForm from './Presenter';

class Container extends Component {
    state = {
        email: "",
        fullName: "",
        username: "",
        password: ""
    }
    static propTypes = {
        facebookLogin: PropTypes.func.isRequired
    }  

    render() {
        const { email, fullName, username, password } = this.state;
        const { _handleChange, _handleSubmit, _handleFacebookLogin } = this;
        return <SignupForm 
                    emailValue={email}
                    fullNameValue={fullName}
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
        e.preventDefault();
        console.log(this.state);
    }
    
    _handleFacebookLogin = response => {
        const { facebookLogin } = this.props;
        facebookLogin(response.accessToken);
    }
}

export default Container;