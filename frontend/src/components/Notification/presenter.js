import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import Loading from "common/Loading";
import NotificationDisplay from "components/NotificationDisplay";
import onClickOutside from 'react-onclickoutside';

const Notification = (props, context) => (
  <div className={ styles.notification}>
    {props.loading && <div className={styles.notiLoading}><NotificationLoading /></div>}
    {!props.loading && <NotificationList noti={props.notificationList} />}
  </div>
);

Notification.propTypes = {
  loading: PropTypes.bool.isRequired,
  handleNotiToggle: PropTypes.func.isRequired,
};

const NotificationLoading = props => <Loading />;

const NotificationList = (props, context) => {
  if(props.noti.length > 0) {
    return (props.noti.map(notification => (
      <NotificationDisplay noti={notification} key={notification.id}/>
    )));
  } else {
    return (
      <div className={styles.noNoti}>
        <span>You don't have Notifications</span>
      </div>
    )
  }
}
  

export default onClickOutside(Notification, {
  handleClickOutside(instance) {
    return instance.props.handleNotiToggle;
  },
});
