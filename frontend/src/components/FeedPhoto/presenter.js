import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import PhotoActions from 'components/PhotoActions';
import PhotoComments from 'components/PhotoComments';
import TimeStamp from 'components/TimeStamp';
import CommentBox from 'components/CommentBox';

const FeedPhoto = props => (
      <div className={styles.feedPhoto}>
          <header className={styles.header}>
              <img
                className={styles.profileImage}
                src={props.creator.profile_image || require("images/noPhoto.jpg")}
                alt={props.creator.username}
              />
              <div className={styles.headerColumn}>
                  <span className={styles.creator}>{props.creator.username}</span>
                  <span className={styles.location}>{props.location}</span>
              </div>
          </header>
          <img 
            src={props.file}
            alt={props.caption}
            className={styles.feedImage}
          />
          <div className={styles.meta}>
              <PhotoActions number={props.like_counts} isLiked={props.is_liked} photoId={props.id}/>
              <PhotoComments creator={props.creator.username} caption={props.caption} comments={props.comments} />
              <TimeStamp time={props.natural_time} />
              <CommentBox photoId={props.id} />
          </div>
      </div> 
    );

FeedPhoto.propTypes = {
    creator: PropTypes.shape({
        profile_image: PropTypes.string,
        username: PropTypes.string.isRequired        
    }),
    caption: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    natural_time: PropTypes.string.isRequired,
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
    ).isRequired,
    is_liked: PropTypes.bool.isRequired
};

export default FeedPhoto;