import React from 'react';
import styles from './styles.module.scss';
import PropTypes from 'prop-types';

const FollowBtn = (props, context) => (
    <button className={styles.button} onClick={props.handleClick}>
        {
          props.user.following ? 
            context.t("UnFollow") :
            context.t("Follow")
        }
      </button>
);

FollowBtn.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        following: PropTypes.bool.isRequired
    }).isRequired
};

FollowBtn.contextTypes = {
    t: PropTypes.func.isRequired
}

export default FollowBtn;