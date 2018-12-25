import { connect } from 'react-redux';
import Container from './container';
import { actionCreators as userActions } from 'redux/modules/user';


const mapStateToProps = (state, props) => {
    const { user: { userList }} = state;
    return {
        userList
    };
}

export default connect(mapStateToProps)(Container);