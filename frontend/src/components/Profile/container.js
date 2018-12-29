import React, { Component } from 'react';
import Profile from './presenter';

class Container extends Component {

    state = {
        loading: true
    }

    componentDidMount() {
    }

    render() {
        return <Profile {...this.state} />;
    }

}

export default Container;