import React, { Component } from 'react';

import UserList from './presenter';

class Container extends Component {
    state = {
        loading: true
    };

      static getDerivedStateFromProps(props, state) {
        if (props.userList) {
          return {
            loading: false
          };
        } 
        return true;
      }
    
    render() {
        return (
            <UserList {...this.state} {...this.props} />
        );
    }
}

export default Container;