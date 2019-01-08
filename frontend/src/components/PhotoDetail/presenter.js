import React from "react";
import PropTypes from "prop-types";
import MdClose from "react-ionicons/lib/MdClose";
import PhotoActions from "components/PhotoActions";
import PhotoComments from "components/PhotoComments";
import TimeStamp from "components/TimeStamp";
import CommentBox from "components/CommentBox";
import Loading from "common/Loading";
import styles from "./styles.module.scss";

const PhotoDetail = (props, context) => (
  <div className={styles.container}>
    <div className={styles.close} onClick={props.closePhotoDetail}>
      <MdClose fontSize="24px" color="white" />
    </div>
    {props.loading ? (
      <Loading />
    ) : (
      <div className={styles.box}>
        <img
          src={props.photoDetail.file || require("images/noPhoto.jpg")}
          alt="userImg"
          className={styles.detailImg}
        />
        <div className={styles.column}>
          <header className={styles.header}>
            <img
              className={styles.profileImage}
              src={
                props.photoDetail.creator.profile_image ||
                require("images/noPhoto.jpg")
              }
              alt={props.photoDetail.creator.username}
            />
            <div className={styles.headerColumn}>
              <span className={styles.creator}>
                {props.photoDetail.creator.username}
              </span>
              <span className={styles.location}>
                {props.photoDetail.location}
              </span>
            </div>
          </header>
          <div className={styles.meta}>
            <div className={styles.comments}>
              <PhotoComments
                creator={props.photoDetail.creator.username}
                caption={props.photoDetail.caption}
                comments={props.photoDetail.comments}
              />
            </div>
            <PhotoActions
              number={props.photoDetail.like_counts}
              isLiked={props.photoDetail.is_liked}
              photoId={props.photoDetail.id}
            />
            <TimeStamp time={props.photoDetail.natural_time} />
            <CommentBox photoId={props.photoDetail.id} />
          </div>
        </div>
      </div>
    )}
  </div>
);

PhotoDetail.contextTypes = {
  t: PropTypes.func.isRequired
};

PhotoDetail.propTypes = {
  //   creator: PropTypes.shape({
  //     profile_image: PropTypes.string,
  //     username: PropTypes.string.isRequired
  //   }),
  //   caption: PropTypes.string.isRequired,
  //   location: PropTypes.string.isRequired,
  //   natural_time: PropTypes.string.isRequired,
  //   file: PropTypes.string.isRequired,
  //   like_count: PropTypes.number,
  //   comments: PropTypes.arrayOf(
  //     PropTypes.shape({
  //       creator: PropTypes.shape({
  //         profile_image: PropTypes.string,
  //         username: PropTypes.string.isRequired
  //       }).isRequired,
  //       message: PropTypes.string.isRequired
  //     })
  //   ).isRequired,
  //   is_liked: PropTypes.bool.isRequired,
  //   closePhotoDetail: PropTypes.func.isRequired
};
export default PhotoDetail;
