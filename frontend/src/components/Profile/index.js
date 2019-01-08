import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Container from './container';
import { actionCreators as userActions } from 'redux/modules/user';
import { actionCreators as photoActions } from 'redux/modules/photos';

const mapStateToProps = (state, ownProps) => {
    const { user: { userProfile, userList }, photos: { photoDetail }} = state;
    return {
        userProfile,
        userList,
        photoDetail,
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
        },
        setUnLoadProfile: () => {
            dispatch(userActions.setUnLoadProfile());
        },
        getPhotoDetail: (photoId) => {
            dispatch(photoActions.getPhotoDetail(photoId));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Container));