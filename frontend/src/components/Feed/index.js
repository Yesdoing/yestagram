import { connect } from 'react-redux';
import Container from './Container';
import { actionCreators as photoActions } from 'redux/modules/photos';

const mapStateToProps = (state, ownProps) => {
    const { photos: { feed }} = state;
    return {
        feed
    };
};

const mapDispatchToProps = (dispatch, ownPops) => {
    return {
        getFeed: () => {
            dispatch(photoActions.getFeed());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);