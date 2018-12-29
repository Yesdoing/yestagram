import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import Loading from 'common/Loading';

const Profile = (props, context) => (
    <div className={styles.profile}>
        {props.loading && <div className={styles.loading}><ProfileLoading /></div>}
    </div>
);

const ProfileLoading = (props) => <Loading />;

export default Profile;