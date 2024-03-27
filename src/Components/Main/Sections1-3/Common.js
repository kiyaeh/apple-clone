import React, { Component } from "react";

export default class Common extends Component {
  render() {
    return (
      <>
        {/* ALERT */}
        <div className="new-alert">{this.props.alert}</div>
        {/* TITLES */}
        <div className="title-wraper bold black">{this.props.titleWraper}</div>
        {/* LEARN AND BUY LINKS */}
        <li>
          <a href={this.props.link1}>{this.props.linkNameFirst}</a>
        </li>
        <li>
          <a href={this.props.link2}>{this.props.linkNameSecond}</a>
        </li>
      </>
    );
  }
}
