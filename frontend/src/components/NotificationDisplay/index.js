import React from "react";
import styles from "./styles.module.scss";
import PropTypes from "prop-types";
import FollowBtn from "common/FollowBtn";
import { Link } from "react-router-dom";

const NotificationDisplay = (props, context) => {
  const { notification_type: notiType, comment } = props.noti;

  let mention;
  if (notiType === "follow") {
    mention = "started following you.";
  } else if (notiType === "like") {
    mention = "liked your photo.";
  } else if (notiType === "comment") {
    mention = "commented: " + comment;
  }

  return (
    <div className={styles.notiRow}>
      <div className={styles.column}>
        <Link
          to={`/profile/${props.noti.from_user.username}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <img
            className={styles.notiProfileImage}
            src={
              props.noti.from_user.profile_image ||
              require("images/noPhoto.jpg")
            }
            alt="profileImg"
          />
        </Link>
      </div>
      <div className={styles.column}>
        <Link
          to={`/profile/${props.noti.from_user.username}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <span className={styles.fromUser}>
            {props.noti.from_user.username}
          </span>
        </Link>{" "}
        <span className={styles.mention}>{mention}</span>{" "}
        <span className={styles.notiTime}>{props.noti.natural_time}</span>
      </div>
      <div className={styles.column}>
        {notiType === "follow" ? (
          <FollowBtn user={props.noti.from_user} />
        ) : (
          <img
            className={styles.notiImg}
            src={props.noti.image.file || require("images/noPhoto.jpg")}
            alt="notiObject"
          />
        )}
      </div>
    </div>
  );
};

NotificationDisplay.contextTypes = {
  t: PropTypes.func.isRequired
};

export default NotificationDisplay;
