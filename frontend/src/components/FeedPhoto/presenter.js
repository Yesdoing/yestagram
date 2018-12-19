import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import PhotoActions from 'components/PhotoActions';

const FeedPhoto = props => (
      <div>
          <header>
              <img 
                src={props.creator.profile_image || require("images/noPhoto.jpg")}
                alt={props.creator.username}
              />
              <div>
                  <span>{props.creator.username}</span>
                  <span>{props.location}</span>
              </div>
          </header>
          <img 
            src={props.file}
            alt={props.caption}
          />
          <div>
              <PhotoActions number={props.like_counts} />
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