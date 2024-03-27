import React, { Component } from "react";
import Common from "./Common";

export default class Section1 extends Component {
  render() {
    return (
      <div>
        <section className="first-hightlight-wrapper">
          <div className="container">
            {/* common updates */}
            <Common alert="New" />
            {/* <div className="new-alert">New</div> */}

            {/* common title */}

            <div className="title-wraper bold black">MacBook Air</div>

            {/* common in all */}

            <div className="links-wrapper">
              <ul>
                <li>
                  <a href="">Learn more</a>
                </li>
                <li>
                  <a href="">Order</a>
                </li>
              </ul>
            </div>
            <div className="ipod-caption row">
              <div className="col-sm-12 col-md-6 text-md-right">
                iPad Pro available starting 3.25
              </div>
              <div className="col-sm-12 col-md-6 text-md-left">
                Magic Keyboard coming in May
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
