import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";

const PhotoComments = props => (
  <div className={`${styles.photoComments} ${props.isModal ? styles.isModal : ''}`}>
    <ul className={styles.list}>
      <Comment username={props.creator} comment={props.caption} />
      {props.comments.map(comment => (
        <Comment
          username={comment.creator.username}
          comment={comment.message}
          key={comment.id}
        />
      ))}
    </ul>
  </div>
);

const Comment = props => (
  <li className={styles.comment}>
    <span className={styles.username}>{props.username}</span>{" "}
    <span className={styles.message}>{props.comment}</span>
  </li>
);

PhotoComments.propTypes = {
  creator: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
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

export default PhotoComments;
