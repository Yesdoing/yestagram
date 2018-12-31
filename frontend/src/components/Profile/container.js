import React, { Component } from 'react';
import Profile from './presenter';

class Container extends Component {

    state = {
        loading: true
    }

    componentDidMount() {
        const { getProfile } = this.props;
        if(!this.props.userProfile) getProfile();
        else this.setState({loading: false});
    }

    static getDerivedStateFromProps(props, state) {
        if(props.userProfile) {
            return {
                loading: false
            };
        }
        return true;
    }

    render() {
        const { userProfile } = this.props;
        return <Profile userProfile={userProfile} {...this.state} />;
    }

}

export default Container;