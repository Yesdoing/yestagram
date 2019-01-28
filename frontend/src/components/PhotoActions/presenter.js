import React from 'react';
import PropTypes from 'prop-types';
import MdHeartOutline from 'react-ionicons/lib/MdHeartOutline';
import MdHeart from 'react-ionicons/lib/MdHeart';
import IosTextOutline from 'react-ionicons/lib/IosTextOutline';
import styles from './styles.module.scss';

const PhotoActions = (props, context) => (
    <div className={`${styles.photoActions} ${props.isModal ? styles.isModal : ''}`}>
        <div className={styles.icons}>
            <span className={styles.icon} onClick={props.handleHeartClick}>
                {
                    props.isLiked ? 
                    (<MdHeart fontSize="28px" color="#EB4B59" beat={true} />) : 
                    (<MdHeartOutline fontSize="28px" color="black"/>)
                } 
            </span>
            <span className={styles.icon} onClick={props.focusTextInput}>
                <IosTextOutline fontSize="28px" color="black"/>
            </span>
        </div>
        <span className={styles.likes} onClick={props.openLikes}>
                {props.number}{" "}
                {props.number === 1 ? context.t("like") : context.t("likes")}
        </span>
    </div>
);

PhotoActions.propTypes = {
    number: PropTypes.number.isRequired,
    isLiked: PropTypes.bool.isRequired, 
    photoId: PropTypes.number.isRequired,
    handleHeartClick: PropTypes.func.isRequired,
    openLikes: PropTypes.func.isRequired,
    focusTextInput: PropTypes.func.isRequired,
}

PhotoActions.contextTypes = {
    t: PropTypes.func.isRequired
}

export default PhotoActions;