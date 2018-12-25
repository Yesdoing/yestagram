import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";

const UserDisplay = (props, context) => (
  <div className={props.vertical ? styles.vertical : styles.horizontal}>
    <div className={styles.column}>
      <img
        className={styles.profileImage}
        src={props.user.profile_image || require("images/noPhoto.jpg")}
        alt={props.user.username}
      />
      <div className={styles.user}>
        <span className={styles.username}>{props.user.username}</span>
        <span className={styles.name}>{props.user.name}</span>
      </div>
    </div>
    <span className={styles.column}>
      <button className={styles.button} onClick={props.handleClick}>
        {
          props.user.following ? 
            context.t("UnFollow") :
            context.t("Follow")
        }
      </button>
    </span>
  </div>
);

UserDisplay.contextTypes = {
  t: PropTypes.func.isRequired
};

UserDisplay.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    profile_image: PropTypes.string,
    following: PropTypes.bool.isRequired
  }).isRequired,
  vertical: PropTypes.bool,
  handleClick: PropTypes.func.isRequired
};

UserDisplay.defaultProps = {
  vertical: false
};

export default UserDisplay;
