import React, { Component } from "react";

export default class Fave extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFave: false
    };
  }

  handleClick = e => {
    // const textValue = e.target.value;
    e.stopPropagation();
    console.log("Handling Fave click!");
    this.props.onFaveToggle();
  };

  render() {
    const isFave = this.props.isFave ? "remove_from_queue" : "add_to_queue";
    return (
      <div onClick={this.handleClick} className={"film-row-fave " + isFave}>
        <p className="material-icons">{isFave}</p>
      </div>
    );
  }
}
