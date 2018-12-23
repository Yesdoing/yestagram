import React from "react";
import PropTypes from "prop-types";
import MdClose from "react-ionicons/lib/MdClose";
import Loading from "common/Loading";
import styles from "./styles.module.scss";

const UserList = props => (
  <div className={styles.container}>
    <div className={styles.box}>
      <header className={styles.header}>
        <h4 className={styles.title}>{props.title}</h4>
        <span onClick={props.closeLikes}>
            <MdClose fontSize="20px" color="black" />
        </span>
      </header>
      <div className={styles.content}>{props.loading ? <Loading /> : null}</div>
    </div>
  </div>
);

UserList.propTypes = {
  title: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  users: PropTypes.array,
  closeLikes: PropTypes.func.isRequired
};

export default UserList;
