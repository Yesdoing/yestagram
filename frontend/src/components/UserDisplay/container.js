import React, { Component } from 'react';
import UserDisplay from './presenter';

class Container extends Component {
    render() {
        return <UserDisplay {...this.props} />
    }
}

export default Container;