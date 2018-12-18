import React from 'react';
import PropTypes from 'prop-types';
import IosCompassOutline from 'react-ionicons/lib/IosCompassOutline';
import MdHeartOutline from 'react-ionicons/lib/MdHeartOutline';
import MdPerson from 'react-ionicons/lib/MdPerson';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';


const Navigation = (props, context) => (
    <div className={styles.nav}>
        <div className={styles.inner}>
            <div className={styles.column}>
                <Link to="/">
                    <img src={require('images/Logo.png')} className={styles.logo} alt={context.t("Logo")}/>
                </Link>
            </div>
            <div className={styles.column}>
                <input type="text" placeholder={context.t("Search")} className={styles.searchInput} />
            </div>
            <div className={styles.column}>
                <div className={styles.navIcon}>
                    <Link to="/explore">
                        <IosCompassOutline onClick={() => alert('Hi!')} fontSize="32px" color="black" />
                    </Link>
                </div>
                <div className={styles.navIcon}>
                    <MdHeartOutline onClick={() => alert('Hi!')} fontSize="32px" color="black" />
                </div>
                <div className={styles.navIcon}>
                    <Link to="/profile">
                        <MdPerson onClick={() => alert('Hi!')} fontSize="32px" color="black" />
                    </Link>
                </div>
            </div>
        </div>
    </div>
);

Navigation.contextTypes = {
    t: PropTypes.func.isRequired
}


export default Navigation;