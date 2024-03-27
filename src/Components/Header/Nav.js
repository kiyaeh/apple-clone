import React, { Component } from "react";
// we use link so tht the page doesnt refresh
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <li className="nav-item">
        <Link className="nav-link js-scroll-trigger" to={this.props.linkUrl}>
          {this.props.linkName}
        </Link>
      </li>
    );
  }
}
export default Nav;
