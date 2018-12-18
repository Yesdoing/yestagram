import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Feed from './Presenter';

class Container extends Component {

    static propTypes = {
        getFeed: PropTypes.func.isRequired,
    };

    componentDidMount() {
        const { getFeed } = this.props;
        getFeed();
    }

    state = {
        loading: true,
    }
    render() {
        return (
            <Feed {...this.state}/>
        );
    }
}

export default Container;