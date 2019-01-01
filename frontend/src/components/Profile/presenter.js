import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import IosSettings from 'react-ionicons/lib/IosSettings';
import Loading from 'common/Loading';
import PhotoDisplay from 'components/PhotoDisplay';

const Profile = (props, context) => (
    <div className={styles.profile}>
        { props.loading ? <div className={styles.loading}><ProfileLoading /></div> : (
            <RenderProfile userProfile={props.userProfile} />
        )}
    </div>
);

const RenderProfile = (props, context) => (
    <div className={styles.profile}>
        <ProfileHeader {...props.userProfile} />
        {
            props.userProfile.images.length > 0 && <RenderImageList imageList={props.userProfile.images} />
        }
    </div>
)

const ProfileHeader = (props, context) => (
    <div className={styles.profileHeader}>
        <div className={styles.profileImage}><img src={ props.profile_image || require("images/noPhoto.jpg")} alt="profileImg"/></div>
        <div className={styles.profileInfo}>
            <div className={styles.column}>
                <span className={styles.username}>{props.username}</span>
                <button className={styles.editButton}>
                    Edit Profile
                </button>
                <div className={styles.settingIcon}>
                    <IosSettings fontSize="24px" color="black" />
                </div>
            </div>
            <div className={styles.column}>
                <span className={styles.counts}>
                    <span className={styles.number}>{props.post_count}</span>{" "}posts
                </span>
                <span className={styles.counts}>
                    <span className={styles.number}>{props.followers_count}</span>{" "}followers
                </span>
                <span className={styles.counts}>
                    <span className={styles.number}>{props.following_count}</span>{" "}following
                </span>
            </div>
            <div className={styles.column}>
                <span className={styles.name}>{props.name}</span>
            </div>
        </div>
    </div>
);

const RenderImageList = props => (
    <div className={styles.userImageList}>
        {
            props.imageList.map(image => (
                <PhotoDisplay {...image} key={image.id} />
            ))
        }
    </div>
);

const ProfileLoading = (props) => <Loading />;

export default Profile;