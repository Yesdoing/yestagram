import React, { Component } from 'react';
import SignupForm from './Presenter';

class Container extends Component {
    state = {
        email: "",
        fullName: "",
        username: "",
        password: ""
    }

    render() {
        const { email, fullName, username, password } = this.state;
        const { _handleChange, _handleSubmit } = this;
        return <SignupForm 
                    emailValue={email}
                    fullNameValue={fullName}
                    usernameValue={username}
                    passwordValue={password}
                    handleChange={_handleChange}
                    handleSubmit={_handleSubmit}
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
}

export default Container;