import React, { Component } from 'react';
import FollowBtn from './presenter';

class Container extends Component {
    render() {
        return <FollowBtn user={this.props.user} handleClick={this.props.handleClick}/>;
    };
}

export default Container;
