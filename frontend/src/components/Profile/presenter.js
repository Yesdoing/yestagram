import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import IosSettings from "react-ionicons/lib/IosSettings";
import Loading from "common/Loading";
import PhotoDisplay from "components/PhotoDisplay";
import PhotoDetail from "components/PhotoDetail";
import UserList from "components/UserList";

const Profile = (props, context) => (
  <div className={styles.profile}>
    {props.loading ? (
      <div className={styles.loading}>
        <ProfileLoading />
      </div>
    ) : (
      <RenderProfile
        seeingFollow={props.seeingFollow}
        userProfile={props.userProfile}
        openFollow={props.openFollow}
        closeButton={props.closeFollow}
        openPhotoDetail={props.openPhotoDetail}
      />
    )}
    {!props.photoDetailToggle && (
      <PhotoDetail closePhotoDetail={props.closePhotoDetail} {...props.photoDetail} />
    )}
  </div>
);

Profile.propTypes = {
  openFollow: PropTypes.func.isRequired,
  closeFollow: PropTypes.func.isRequired,
  seeingFollow: PropTypes.string.isRequired,
  openPhotoDetail: PropTypes.func.isRequired,
  closePhotoDetail: PropTypes.func.isRequired
};

const RenderProfile = (props, context) => (
  <div className={styles.profile}>
    <ProfileHeader {...props.userProfile} openFollow={props.openFollow} />
    {props.userProfile.images.length > 0 && (
      <RenderImageList imageList={props.userProfile.images} openPhotoDetail={props.openPhotoDetail}/>
    )}
    {props.seeingFollow !== "" && (
      <UserList title={props.seeingFollow} closeButton={props.closeButton} />
    )}
  </div>
);

const ProfileHeader = (props, context) => (
  <div className={styles.profileHeader}>
    <div className={styles.profileImage}>
      <img
        src={props.profile_image || require("images/noPhoto.jpg")}
        alt="profileImg"
      />
    </div>
    <div className={styles.profileInfo}>
      <div className={styles.column}>
        <span className={styles.username}>{props.username}</span>
        <button className={styles.editButton}>Edit Profile</button>
        <div className={styles.settingIcon}>
          <IosSettings fontSize="24px" color="black" />
        </div>
      </div>
      <div className={styles.column}>
        <span className={styles.counts}>
          <span className={styles.number}>{props.post_count}</span> posts
        </span>
        <span
          className={styles.counts}
          onClick={() => props.openFollow("followers")}
        >
          <span className={styles.number}>{props.followers_count}</span>{" "}
          followers
        </span>
        <span
          className={styles.counts}
          onClick={() => props.openFollow("following")}
        >
          <span className={styles.number}>{props.following_count}</span>{" "}
          following
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
    {props.imageList.map(image => (
      <PhotoDisplay {...image} key={image.id} openPhotoDetail={props.openPhotoDetail} />
    ))}
  </div>
);

const ProfileLoading = props => <Loading />;

export default Profile;
