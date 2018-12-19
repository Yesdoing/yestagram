import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import Loading from 'common/Loading';

const Feed = (props) => {
    if(props.loading) {
        return <FeedLoading />;
    } else if (props.feed) {
        return <RenderFeed {...props} />;
    }
}

const FeedLoading = props => (
    <div className={styles.feed}>
        <Loading />
    </div>
)

const RenderFeed = props => (
    <div className={styles.feed}>{props.feed.map(post => post.caption)}</div>
);

Feed.contextTypes = {
    t: PropTypes.func.isRequired,
}

Feed.propTypes = {
    loading: PropTypes.bool.isRequired
}

export default Feed;