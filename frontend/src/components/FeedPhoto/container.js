import React, { Component } from "react";
import FeedPhoto from "./presenter";

class Container extends Component {
  state = {
    seeingLikes: false
  };


  textInput = null;
  
  _setTextInputRef = element => {
    this.textInput = element;
  } 
  _focusTextInput = () => {
    console.log(this.textInput);
    if(this.textInput) this.textInput.focus();
  }

  render() {
    return <FeedPhoto 
                {...this.props} 
                {...this.state} 
                openLikes={this._openLikes}
                closeLikes={this._closeLikes}
                setTextInputRef={this._setTextInputRef}
                focusTextInput={this._focusTextInput}
            />;
  }

  _openLikes = () => {
    const { getPhotoLikes } = this.props;
    this.setState({
      seeingLikes: true
    });
    getPhotoLikes();
  };

  _closeLikes = () => {
    this.setState({
      seeingLikes: false
    });
  };
}

export default Container;
