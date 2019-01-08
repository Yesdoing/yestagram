import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const TimeStamp = props => <span className={`${styles.timeStamp} ${props.isModal ? styles.isModal : ''}`}>{props.time}</span>;

TimeStamp.propTypes = {
    time: PropTypes.string.isRequired
}

export default TimeStamp;