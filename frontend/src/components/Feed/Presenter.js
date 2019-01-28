import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import Loading from 'common/Loading';
import FeedPhoto from 'components/FeedPhoto';

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

const RenderFeed = props => {
    if(props.feed.length > 0) {
        return (
            <div className={styles.feed}>{props.feed.map(photo => <FeedPhoto {...photo} key={photo.id} />)}</div>
        );
    } else {
        return (
            <div className={styles.feed}>
                <span className={styles.noFeed}>You don't have following. Please go to Explore</span>
            </div>
        );
    }

}
    


Feed.contextTypes = {
    t: PropTypes.func.isRequired,
}

Feed.propTypes = {
    loading: PropTypes.bool.isRequired
}

export default Feed;