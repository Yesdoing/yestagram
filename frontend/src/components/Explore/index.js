import { connect } from 'react-redux';
import Container from './Container';
import { actionCreators as userActions } from 'redux/modules/user';

const mapStateToProps = (state, ownProps) => {
    const { user: { userList }} = state;
    return {
        userList
    };
};

const mapDispatchToProps = (dispatch, ownPops) => {
    return {
        getExplore: () => {
            dispatch(userActions.getExplore());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);