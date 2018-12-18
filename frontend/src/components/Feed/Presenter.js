import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const Feed = (props, context) => <h1>Feed!!</h1>;

Feed.contextTypes = {
    t: PropTypes.func.isRequired,
}

Feed.propTypes = {
    loading: PropTypes.bool.isRequired
}

export default Feed;