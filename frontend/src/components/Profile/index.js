import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Container from './container';
import { actionCreators as userActions } from 'redux/modules/user';

const mapStateToProps = (state, ownProps) => {
    const { user: { userProfile, userList }} = state;
    return {
        userProfile,
        userList
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const { match: { params: { username }}} = ownProps;
    return {
        getProfile: () => {
            dispatch(userActions.getProfile(username));
        },
        getFollowingList: () => {
            dispatch(userActions.getFollowingList(username));
        },
        getFollowersList: () => {
            dispatch(userActions.getFollowersList(username));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Container));