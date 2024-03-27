import React, { Component } from "react";

export default class FooterLast extends Component {
  render() {
    return (
      <div>
        <li>
          <a href="#">{this.props.lastLinks}</a>
        </li>
      </div>
    );
  }
}
