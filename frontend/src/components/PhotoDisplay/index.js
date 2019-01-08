import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import MdHeart from 'react-ionicons/lib/MdHeart';
import IosText from 'react-ionicons/lib/IosText';


const PhotoDisplay = props => (
    <div className={styles.container} onClick={()=>props.openPhotoDetail(props.id)}>
        <img src={props.file} alt="None Resource" className={styles.photoImage} />
        <div className={styles.overlay}>
            <span className={styles.data}>
                <MdHeart fontSize="28px" color="white" /> {" "}
                {props.like_counts}
            </span>
            <span className={styles.data}>
                <IosText fontSize="28px" color="white"/> {" "}
                {props.comment_counts}
            </span>
        </div>
    </div>
);

PhotoDisplay.propTypes = {
    file: PropTypes.string.isRequired,
    like_counts: PropTypes.number.isRequired,
    comment_counts: PropTypes.number.isRequired,
};

export default PhotoDisplay;