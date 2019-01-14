import { connect } from 'react-redux';
import Container from './container';
import { actionCreators as photoActions } from 'redux/modules/photos';

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addPhotoImage: (file, location, caption, tags) => {
            dispatch(photoActions.addPhotoImage(file, location, caption, tags));
        }
    };
}

export default connect(null, mapDispatchToProps)(Container);
