import { connect } from 'react-redux';
import Container from './container';


const mapStateToProps = (state, props) => {
    const { user: { userList }} = state;
    return {
        userList
    };
}

export default connect(mapStateToProps)(Container);