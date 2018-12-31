import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Container from './Container';
import { actionCreators as userActions } from 'redux/modules/user';

const mapStateToProps = (state, ownProps) => {
    const { user: { userInfo }} = state;
    return {
        userInfo
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getUserInfo: () => {
            dispatch(userActions.getUserInfo());
        }
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Container));