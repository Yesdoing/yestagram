import React, { Component } from "react";
import Profile from "./presenter";

class Container extends Component {
  state = {
    loading: true,
    seeingFollow: ""
  };

  componentDidMount() {
    const { getProfile } = this.props;
    getProfile();
  }

  componentDidUpdate(prevProps, prevState) {
    const { getProfile, setUnLoadProfile } = this.props;
    if (prevProps.match.params.username !== this.props.match.params.username) {
      setUnLoadProfile();
      getProfile();
    }
  }

  componentWillUnmount() {
    this.props.setUnLoadProfile();
  }

  static getDerivedStateFromProps(props, state) {
    if (props.userProfile) {
      return {
        loading: false
      };
    }
    return {
      loading: true
    };
  }

  render() {
    const { userProfile } = this.props;
    const { _openFollow, _closeFollow} = this;
    return <Profile userProfile={userProfile} {...this.state} openFollow={_openFollow} closeFollow={_closeFollow} />;
  }

  _openFollow = (followType) => {
    const { getFollowingList, getFollowersList } = this.props;
    this.setState({
      seeingFollow: followType
    });
    if(followType === "following") {
      getFollowingList();
    } else if(followType === "followers") {
      getFollowersList();
    }
  };

  _closeFollow = () => {
    this.setState({
      seeingFollow: ""
    });
  };
}

export default Container;
