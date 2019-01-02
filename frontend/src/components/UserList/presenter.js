import React from "react";
import PropTypes from "prop-types";
import MdClose from "react-ionicons/lib/MdClose";
import Loading from "common/Loading";
import styles from "./styles.module.scss";
import UserDisplay from 'components/UserDisplay';

const UserList = props => (
  <div className={styles.container}>
    <div className={styles.box}>
      <header className={styles.header}>
        <h4 className={styles.title}>{props.title}</h4>
        <span onClick={props.closeButton}>
            <MdClose fontSize="30px" color="black" />
        </span>
      </header>
      <div className={styles.content}>{props.loading ? <Loading /> : <UserDisplays list={props.userList}/>}</div>
    </div>
  </div>
);

const UserDisplays = props => props.list.map(user => <UserDisplay user={user} key={user.id} />);

UserList.propTypes = {
  title: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  userList: PropTypes.array,
  closeButton: PropTypes.func.isRequired
};

export default UserList;
