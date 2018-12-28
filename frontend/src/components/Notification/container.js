import React, { Component } from 'react';
import Notification from './presenter';

class Container extends Component {
    state = {
        loading: true
    };

    componentDidMount() {
        const { getNotification } = this.props;
        getNotification();
        if(this.props.notificationList) this.setState({loading: false});
    }

    static getDerivedStateFromProps(props, state) {
        if (props.notificationList) {
          return {
            loading: false
          };
        } 
        return true;
    }

    render() {
        const { notificationList } = this.props;
        return <Notification {...this.state} notificationList={notificationList} />
    }
}

export default Container;