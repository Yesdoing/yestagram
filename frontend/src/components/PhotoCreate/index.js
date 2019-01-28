import { connect } from 'react-redux';
import Container from './container';
import { withRouter } from 'react-router-dom';
import { actionCreators as photoActions } from 'redux/modules/photos';

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addPhotoImage: async (file, location, caption, tags) => {
            return await dispatch(photoActions.addPhotoImage(file, location, caption, tags));
        },
        setInitializeFeed: () => {
            dispatch(photoActions.initialize());
        }
    };
}

export default connect(null, mapDispatchToProps)(withRouter(Container));
