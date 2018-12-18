import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import Loading from 'common/Loading';

const Feed = (props, context) => {
    if(props.loading) {
        return <FeedLoading />;
    }
}

const FeedLoading = props => (
    <div className={styles.feed}>
        <Loading />
    </div>
)

Feed.contextTypes = {
    t: PropTypes.func.isRequired,
}

Feed.propTypes = {
    loading: PropTypes.bool.isRequired
}

export default Feed;