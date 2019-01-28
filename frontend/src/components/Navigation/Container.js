import React, { Component } from "react";
import Navigation from "./Presenter";

class Container extends Component {
  state = {
    term: "",
    notiToggle: false,
    loading: true,
  };


  componentDidMount() {
    const { getUserInfo } = this.props;
    if(!this.props.userInfo) getUserInfo();
    else this.setState({loading: false});
  }

  static getDerivedStateFromProps(props, state) {
      if (props.userInfo) {
        return {
          loading: false
        };
      } 
      return true;
  }

  render() {
    const { _handleInputChange, _handleSubmit, _handleNotiOpen, _handleNotiClose } = this;
    const { term, notiToggle, loading } = this.state;
    const { userInfo } = this.props;
    return (
      <Navigation
        handleInputChange={_handleInputChange}
        handleSubmit={_handleSubmit}
        handleNotiOpen={_handleNotiOpen}
        handleNotiClose={_handleNotiClose}
        toggle={notiToggle}
        value={term}
        loading={loading}
        userInfo={userInfo}
      />
    );
  }

  _handleInputChange = event => {
    const {
      target: { value }
    } = event;
    this.setState({
      term: value
    });
  };

  _handleSubmit = event => {
    const { term } = this.state;
    event.preventDefault();
    this.props.history.push(`/search/${term}`);
    this.setState({
        term: ""
    });
  };

  _handleNotiOpen = event => {
    this.setState({
      notiToggle: true
    });
  }

  _handleNotiClose = event => {
    event.stopPropagation();
    this.setState({
      notiToggle: false
    });
  }
}

export default Container;
