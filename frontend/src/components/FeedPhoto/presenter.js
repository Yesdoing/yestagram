import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const FeedPhoto = props => {
    console.log(props);
    return (
        <div className={styles.feedPhoto}>hello!</div>
    )
}

FeedPhoto.propTypes = {
    creator: PropTypes.shape({
        profile_image: PropTypes.string,
        username: PropTypes.string.isRequired        
    }),
    caption: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    file: PropTypes.string.isRequired,
    like_count: PropTypes.number,
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            creator: PropTypes.shape({
                profile_image: PropTypes.string,
                username: PropTypes.string.isRequired        
            }).isRequired,
            message: PropTypes.string.isRequired
        })
    ).isRequired
};

export default FeedPhoto;