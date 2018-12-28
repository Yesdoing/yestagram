import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import Loading from 'common/Loading';
import UserDisplay from 'components/UserDisplay';

const Explore = (props) => {
    if(props.loading) {
        return <ExploreLoading />;
    } else if (props.userList) {
        return <RenderExplore {...props} />;
    }
}

const ExploreLoading = props => (
    <div className={styles.explore}>
        <Loading />
    </div>
)

const RenderExplore = props => (
    <div className={styles.explore}>{props.userList.map(user => <UserDisplay big={true} user={user} key={user.id} />)}</div>
);

Explore.contextTypes = {
    t: PropTypes.func.isRequired,
}

Explore.propTypes = {
    loading: PropTypes.bool.isRequired
}

export default Explore;