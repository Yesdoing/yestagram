import React, { Component } from "react";
import PhotoCreate from "./presenter";

class Container extends Component {
  state = {
    file: null,
    location: "",
    caption: "",
    tags: "",
    preview: "",
    isSubmitting: false
  };

  render() {
    const { _handleChangeFile, _handleChangeValue, _handleSubmit } = this;
    return (
      <PhotoCreate
        handleChangeValue={_handleChangeValue}
        handleChangeFile={_handleChangeFile}
        handleSubmit={_handleSubmit}
        {...this.state}
      />
    );
  }

  _handleChangeFile = e => {
    const files = Array.from(e.target.files);
    
    let preview;
    if (files.length === 0) {
      preview = "";
    } else {
      preview = window.URL.createObjectURL(files[0]);
    }

    this.setState({
      file: files[0],
      preview
    });
  };

  _handleChangeValue = e => {
    const {
      target: { value, name }
    } = e;
    this.setState({
      [name]: value
    });
  };

  _handleSubmit = async e => {
    e.preventDefault();
    const { setInitializeFeed, addPhotoImage, history } = this.props;
    const { file, location, caption, tags } = this.state;
    if (file && location && caption && tags) {
      this.setState({
        isSubmitting: true
      });
      const result = await addPhotoImage(file, location, caption, tags);
      if(result) {
        setInitializeFeed();
        history.push("/");
      } else {
        alert("Sorry, You don't have authorization");
        history.push("/"); 
      }
    } else {
      alert("All Fields are required!!");
    }
  };
}

export default Container;
