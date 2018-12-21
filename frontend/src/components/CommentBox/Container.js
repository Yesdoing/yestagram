import React, { Component } from "react";
import CommentBox from "./Presenter";

class Container extends Component {
  state = {
    comment: ""
  };
  render() {
    return (
      <CommentBox
        {...this.state}
        {...this.props}
        handleInputChange={this._handleInputChange}
        handleKeyPress={this._handleKeyPress}
      />
    );
  }

  _handleInputChange = event => {
    const {
      target: { value }
    } = event;
    this.setState({
      comment: value
    });
  };

  _handleKeyPress = event => {
    const { key } = event;
    const { comment } = this.state;
    const { submitComment } = this.props;

    if(key === "Enter") {
        event.preventDefault();
        submitComment(comment);
        this.setState({
            comment: ""
        });
    }
  };
}

export default Container;
