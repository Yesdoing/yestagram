import { connect } from 'react-redux';
import Container from './container';
import { actionCreators as photoActions } from 'redux/modules/photos';

const mapStateToProps = (state, ownProps) => {
  const { photos: { photoDetail } } = state;
  return {
    photoDetail
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    initialize: () => dispatch(photoActions.initialize())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);