import React, { Component } from 'react';

import UserList from './presenter';

class Container extends Component {
    state = {
        loading: true
    };

    render() {
        return (
            <UserList {...this.state} {...this.props} />
        );
    }
}

export default Container;