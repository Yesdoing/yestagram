import { connect } from 'react-redux';
import Container from './Container';
import { actionCreators as photoActions } from 'redux/modules/photos';

const mapDispatchToProps = (dispatch, ownPops) => {
    return {
        getFeed: () => {
            dispatch(photoActions.getFeed());
        }
    }
}

export default connect(null, mapDispatchToProps)(Container);