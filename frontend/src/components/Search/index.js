import { connect } from 'react-redux';
import Container from './container';
import { actionCreators as userActions } from 'redux/modules/user';
import { actionCreators as photoActions } from 'redux/modules/photos';

const mapStateToProps = (state, ownProps) => {
    const { user: { userList, imageList }, photos: { photoDetail }} = state;
    return {
        imageList,
        userList,
        photoDetail
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const { match: { params: { searchTerm } } } = ownProps; 
    return {
        searchByTerm: () => {
            dispatch(userActions.searchByTerm(searchTerm));
        },
        getPhotoDetail: (photoId) => {
            dispatch(photoActions.getPhotoDetail(photoId));
        }    
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);