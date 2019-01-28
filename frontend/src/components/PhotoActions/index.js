import { connect } from 'react-redux';
import Container from './container';
import { actionCreators as photoActions } from 'redux/modules/photos';

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleHeartClick: () => {
            console.log(ownProps);
            if(ownProps.isLiked) {
                dispatch(photoActions.unLikePhoto(ownProps.photoId));
            } else {
                dispatch(photoActions.likePhoto(ownProps.photoId));
            }
        }
    }
}

export default connect(null, mapDispatchToProps)(Container);