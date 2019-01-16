import React from "react";
import PropTypes from "prop-types";
import MdClose from "react-ionicons/lib/MdClose";
import FeedPhoto from 'components/FeedPhoto';
import Loading from "common/Loading";
import styles from "./styles.module.scss";

const PhotoDetail = (props, context) => (
  <div className={styles.container}>
    <div className={styles.close} onClick={props.closePhotoDetail}>
      <MdClose fontSize="24px" color="white" />
    </div>
    {props.loading ? (
      <Loading />
    ) : (
      <div className={styles.box}>
        <FeedPhoto {...props} isModal={true}/>
      </div>
    )}
  </div>
);

PhotoDetail.propTypes = {
  closePhotoDetail: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired  
}

export default PhotoDetail;
