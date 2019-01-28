import React, { Component } from "react";
import PropTypes from "prop-types";
import Feed from "./Presenter";

class Container extends Component {
  static propTypes = {
    getFeed: PropTypes.func.isRequired
  };

  state = {
    loading: true
  };

  componentDidMount() {
    const { getFeed } = this.props;
    if(!this.props.feed) getFeed();
    else this.setState({loading: false});
  }

  componentWillUnmount() {
    const { initialize } = this.props;
    initialize();
}

  static getDerivedStateFromProps(props, state) {
    if (props.feed) {
      return {
        loading: false
      };
    } 
    return true;
  }

  render() {
    const { feed } = this.props;
    return <Feed {...this.state} feed={feed} />;
  }
}

export default Container;
