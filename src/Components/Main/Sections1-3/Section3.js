import React, { Component } from "react";
import Common from "./Common";

export default class Section3 extends Component {
  render() {
    return (
      <div>
        <section className="third-hightlight-wrapper">
          <div className="container">
            {/* common titlr */}
            <div className="title-wraper bold">iPhone 11 Pro</div>
            {/* common description */}
            <div className="description-wrapper">
              Pro cameras. Pro display. Pro performance.
            </div>
            {/* common pirce */}
            <div className="price-wrapper">
              From $24.95/mo. or $599 with trade‑in.
            </div>
            {/* common */}
            <div className="links-wrapper">
              <ul>
                <li>
                  <a href="">Learn more</a>
                </li>
                <li>
                  <a href="">Buy</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
