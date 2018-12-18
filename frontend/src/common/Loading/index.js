import React from 'react';
import styles from './styles.module.scss';

const Loading = props => (
    <div className={styles.container}>
        <img src={require('images/loading.png')} alt="loading" className={styles.spinner}/>
    </div>
)

export default Loading;