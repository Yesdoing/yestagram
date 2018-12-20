import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const TimeStamp = props => props.time;

TimeStamp.propTypes = {
    time: PropTypes.string.isRequired
}

export default TimeStamp;