import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Container from './Container';


export default connect()(withRouter(Container));