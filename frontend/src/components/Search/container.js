import React, { Component } from "react";
import PropTypes from "prop-types";
import Search from "./presenter";

class Container extends Component {

  state = {
    loading: true
  };

  static propTypes = {
    searchByTerm: PropTypes.func.isRequired,
    imageList: PropTypes.array,
    userList: PropTypes.array
  } 

  componentDidMount() {
    const { searchByTerm } = this.props;
    searchByTerm();
  }

  componentDidUpdate(prevProps, prevState) {
    const { searchByTerm } = this.props;
    if(prevProps.match.params.searchTerm !== this.props.match.params.searchTerm) {
      searchByTerm();
    }
  }

  static getDerivedStateFromProps(props, state) {
    if(props.userList && props.imageList) {
      return {
        loading: false
      };
    }
    return null; 
  }

  render() {
    const { imageList, userList } = this.props;
    return <Search {...this.state} userList={userList} imageList={imageList} />;
  }
}

export default Container;
