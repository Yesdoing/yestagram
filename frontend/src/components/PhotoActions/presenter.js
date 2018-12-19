import React from 'react';
import PropTypes from 'prop-types';
import MdHeartOutline from 'react-ionicons/lib/MdHeartOutline';
import IosTextOutline from 'react-ionicons/lib/IosTextOutline';
import styles from './styles.module.scss';

const PhotoActions = (props, context) => (
    <div>
        <div>
            <span>
                <MdHeartOutline fontSize="28px" color="black"/>
            </span>
            <span>
                <IosTextOutline fontSize="28px" color="black"/>
            </span>
        </div>
        <span>
                {props.number}{" "}
                {props.number === 1 ? context.t("like") : context.t("likes")}
        </span>
    </div>
);

PhotoActions.propTypes = {
    number: PropTypes.number.isRequired
}

PhotoActions.contextTypes = {
    t: PropTypes.func.isRequired
}

export default PhotoActions;