import React from 'react';
import styles from './styles.module.scss';
import PropTypes from 'prop-types';

const NotificationDisplay = (props, context) => {
    const { notification_type: notiType , comment} = props.noti;

    let mention;
    console.log(props);
    if( notiType === 'follow' ) {
        mention = 'started following you.';
    } else if(notiType === 'like') {
        mention = 'liked your photo.';
    } else if(notiType === 'comment') {
        mention = 'commented: ' + comment;
    }
    
    return (
        <div className={styles.notiRow}>
            <div className={styles.column}>
                <img className={styles.notiProfileImage} src={props.noti.from_user.profile_image || require('images/noPhoto.jpg')} alt="profileImg"/>
            </div>
            <div className={styles.column}>
                <span className={styles.fromUser}>{props.noti.from_user.username}</span>
                {" "}<span className={styles.mention}>{mention}</span>
                {" "}<span className={styles.notiTime}>{props.noti.natural_time}</span>
            </div>
            <div className={styles.column}>
                {
                    notiType === 'follow' ?
                    <button className={styles.button} onClick={props.handleClick}>                     
                      {context.t("UnFollow")}
                    </button>
                    : <img className={styles.notiImg} src={props.noti.image.file || require('images/noPhoto.jpg')} alt="notiObject" />
                }
            </div>
        </div>
    );
};

NotificationDisplay.contextTypes = {
    t: PropTypes.func.isRequired,
}

export default NotificationDisplay;