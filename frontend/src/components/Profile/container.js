import React, { Component } from 'react';
import Profile from './presenter';

class Container extends Component {

    state = {
        loading: true
    }

    componentDidMount() {
        const { getProfile } = this.props;
        getProfile();
    }

    componentDidUpdate(prevProps, prevState) {
        const { getProfile } = this.props;
        if(prevProps.match.params.username !== this.props.match.params.username) {
            getProfile();
        }
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