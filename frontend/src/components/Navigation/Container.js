import React, { Component } from "react";
import Navigation from "./Presenter";

class Container extends Component {
  state = {
    term: "",
    notiToggle: false
  };

  render() {
    const { _handleInputChange, _handleSubmit, _handleNotiToggle } = this;
    const { term, notiToggle } = this.state;
    return (
      <Navigation
        handleInputChange={_handleInputChange}
        handleSubmit={_handleSubmit}
        handleNotiToggle={_handleNotiToggle}
        toggle={notiToggle}
        value={term}
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

  _handleNotiToggle = event => {
    const { notiToggle } = this.state;
    this.setState({
      notiToggle: !notiToggle
    });
  }
}

export default Container;
