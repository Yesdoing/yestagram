import React, { Component } from "react";
import PhotoCreate from "./presenter";

class Container extends Component {
  state = {
    uploading: false,
    file: null,
    location: "",
    caption: "",
    tags: "",
    preview: ""
  };

  render() {
    const { _handleChangeFile, _handleChangeValue, _handleSubmit } = this;
    return (
      <PhotoCreate
        handleChangeValue={_handleChangeValue}
        handleChangeFile={_handleChangeFile}
        handleSubmit={_handleSubmit}
        preview={this.state.preview}
      />
    );
  }

  _handleChangeFile = e => {
    const files = Array.from(e.target.files);
    let preview;
    if (files.length === 0) {
        this.setState({ uploading: false });
        preview = "";
    } else {
        this.setState({ uploading: true });
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

  _handleSubmit = e => {
    const { addPhotoImage } = this.props;
    const { file, location, caption, tags } = this.state;
    e.preventDefault();
    addPhotoImage(file, location, caption, tags);
  };
}

export default Container;
