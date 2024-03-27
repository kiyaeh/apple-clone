import React, { Component } from "react";

export default class FooterCommon extends Component {
  render() {
    return (
      <>
        <li>
          <a href="#">{this.props.linkNames}</a>
        </li>
        <li>
          <a href="#">{this.props.lastLinks}</a>
        </li>
      </>
    );
  }
}
