import React, { Component } from 'react';
import LoginForm from './Presenter';

class Container extends Component {
    state = {
        username: "",
        password: ""
    }

    render() {
        const { username, password } = this.state;
        const {_handleChangeValue, _handleSubmit} = this;
        return <LoginForm usernameValue={username} passwordValue={password} handleChangeValue={_handleChangeValue} handleSubmit={_handleSubmit} />
    }

    _handleChangeValue = e => {
        const {target: {value, name}} = e;
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