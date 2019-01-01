import React, { Component } from "react";
import PropTypes from "prop-types";
import Explore from "./Presenter";

class Container extends Component {
  static propTypes = {
    getExplore: PropTypes.func.isRequired,
    userList: PropTypes.array
  };

  state = {
    loading: true
  };

  componentDidMount() {
    const { getExplore } = this.props;
    if(!this.props.userList || this.props.userList < 1) getExplore();
    else this.setState({loading: false});
  }

  static getDerivedStateFromProps(props, state) {
    if (props.userList) {
      return {
        loading: false
      };
    } 
    return true;
  }

  render() {
    const { userList } = this.props;
    return <Explore {...this.state} userList={userList} />;
  }
}

export default Container;
