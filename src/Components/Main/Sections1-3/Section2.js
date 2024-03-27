import React, { Component } from "react";
import Common from "./Common";

export default class Section2 extends Component {
  render() {
    return (
      <div>
        <section className="second-hightlight-wrapper">
          <div className="container">
            {/* common updates */}

            <div className="new-alert">New</div>

            {/* commmon title */}
            <div className="title-wraper bold black">MacBook Air</div>

            {/* common description */}
            <div className="description-wrapper black">
              Twice the speed. Twice the storage.
            </div>
            {/* common pirce */}
            <div className="price-wrapper grey">From $999.</div>
            {/* coomon */}
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
          </div>
        </section>
      </div>
    );
  }
}
