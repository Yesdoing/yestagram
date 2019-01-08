import React, { Component } from "react";
import Profile from "./presenter";

class Container extends Component {
  state = {
    loading: true,
    seeingFollow: "",
    photoDetailToggle: true
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
    const { userProfile, photoDetail } = this.props;
    const { _openFollow, _closeFollow, _openPhotoDetail, _closePhotoDetail } = this;
    return (
      <Profile
        userProfile={userProfile}
        {...this.state}
        openFollow={_openFollow}
        closeFollow={_closeFollow}
        openPhotoDetail={_openPhotoDetail}
        closePhotoDetail={_closePhotoDetail}
        photoDetail={photoDetail}
      />
    );
  }

  _openFollow = followType => {
    const { getFollowingList, getFollowersList } = this.props;
    this.setState({
      seeingFollow: followType
    });
    if (followType === "following") {
      getFollowingList();
    } else if (followType === "followers") {
      getFollowersList();
    }
  };

  _closeFollow = () => {
    this.setState({
      seeingFollow: ""
    });
  };

  _openPhotoDetail = photoId => {
    const { getPhotoDetail } = this.props;
    this.setState({
      photoDetailToggle: false
    });
    getPhotoDetail(photoId);
  };

  _closePhotoDetail = () => {
    this.setState({
      photoDetailToggle: true
    });
  };
}

export default Container;
