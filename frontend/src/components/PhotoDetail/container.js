import React, {Component} from 'react';
import PhotoDetail from './presenter';

class Container extends Component {

    state = {
        loading : true
    };

    static getDerivedStateFromProps(props, state) {
        if(props.photoDetail) {
            return {
                loading: false 
            };
        }
        return {
            loading: true
        };
    }

    componentWillUnmount() {
        const { initialize } = this.props;
        initialize();
    }

    render() {
        console.log(this.props);
        return <PhotoDetail {...this.state} {...this.props} />
    }
}

export default Container;