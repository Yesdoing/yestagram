import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import Loading from "common/Loading";
import NotificationDisplay from "components/NotificationDisplay";

const Notification = (props, context) => (
  <div className={ styles.notification}>
    {props.loading && <div className={styles.notiLoading}><NotificationLoading /></div>}
    {!props.loading && <NotificationList noti={props.notificationList} />}
  </div>
);

Notification.propTypes = {
  loading: PropTypes.bool.isRequired
};

const NotificationLoading = props => <Loading />;

const NotificationList = (props, context) =>
  props.noti.map(notification => (
    <NotificationDisplay noti={notification} key={notification.id}/>
  ));

export default Notification;
