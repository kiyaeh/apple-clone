import React, { Component } from "react";
import icon16 from "../../CommonResources/images/icons/16.png";
import FooterCommon from "./FooterCommon";
import FooterLast from "./FooterLast";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer-wrapper">
          <div className="container">
            <div className="upper-text-container">
              <p>
                1. Trade In: Trade‑in values vary. iPhone 11 and iPhone 11 Pro
                promotional pricing is after trade‑in of iPhone 8 Plus and
                iPhone X in good condition. Additional trade‑in values require
                purchase of a new iPhone, subject to availability and limits.
                Must be at least 18. Apple or its trade-in partners reserve the
                right to refuse or limit any Trade In transaction for any
                reason. In‑store trade‑in requires presentation of a valid,
                government-issued photo ID (local law may require saving this
                information). Sales tax may be assessed on full value of new
                iPhone. Additional terms from Apple or Apple’s trade-in partners
                may apply. Monthly pricing: Available to qualified customers and
                requires 0% APR, 24-month installment loan with Citizens One or
                Apple Card Monthly Installments and iPhone activation with AT&T,
                Sprint, T-Mobile, or Verizon. Taxes and shipping not included.
                Additional Apple Card Monthly Installments terms are in the{" "}
                <a
                  href="https://www.goldmansachs.com/terms-and-conditions/Apple-Card-Customer-Agreement.pdf"
                  target="_blank"
                >
                  {" "}
                  Customer Agreement
                </a>
                . Additional iPhone Payments terms are{" "}
                <a href="https://www.apple.com/legal/sales-support/iphoneinstallments_us/">
                  {" "}
                  here
                </a>
                .
              </p>
              <p>
                2. Subscription required.
                <br />
                Magic Keyboard sold separately.
                <br />
                Apple TV+ is $4.99/month after free trial. One subscription per
                Family Sharing group. Offer good for 3 months after eligible
                device activation. Plan automatically renews until cancelled.
                Restrictions and other{" "}
                <a href="https://www.apple.com/promo/">terms </a> apply.
              </p>
            </div>
            <div className="footer-links-wrapper row">
              <div className="links-wrapper-1 col-sm-12 col-md">
                <h3>Shop and Learn</h3>
                <ul>
                  <FooterCommon linkNames="Mac" />
                  <FooterCommon linkNames="iPad" />
                  <FooterCommon linkNames="iPhone" />
                  <FooterCommon linkNames="Watch" />
                  <FooterCommon linkNames="TV" />
                  <FooterCommon linkNames="Music" />
                  <FooterCommon linkNames="AirPods" />
                  <FooterCommon linkNames="iPod touch" />
                  <FooterCommon linkNames="Accessories " />
                  <FooterCommon linkNames="Gift Cards" />
                </ul>
              </div>

              <div className="links-wrapper-2 col-sm-12 col-md">
                <h3>Services</h3>
                <ul>
                  <FooterCommon linkNames="Apple Music" />
                  <FooterCommon linkNames="Apple News+" />
                  <FooterCommon linkNames="Apple TV+" />
                  <FooterCommon linkNames="Apple Arcade" />
                  <FooterCommon linkNames="Apple Card" />
                  <FooterCommon linkNames="iCloud" />
                </ul>
                <h3>Account</h3>
                <ul>
                  <FooterCommon linkNames="Manage Your Apple ID" />
                  <FooterCommon linkNames="Apple Store Account" />
                  <FooterCommon linkNames="iCloud.com" />
                </ul>
              </div>

              <div className="links-wrapper-3 col-sm-12 col-md">
                <h3>Apple Store</h3>
                <ul>
                  <FooterCommon linkNames="Find a Store" />
                  <FooterCommon linkNames="Genius Bar" />
                  <FooterCommon linkNames="Today at Apple" />
                  <FooterCommon linkNames="Apple Camp" />
                  <FooterCommon linkNames="Field Trip" />
                  <FooterCommon linkNames="Apple Store App" />
                  <FooterCommon linkNames="Refurbished and Clearance" />
                  <FooterCommon linkNames="Financing" />
                  <FooterCommon linkNames="Apple Trade In" />
                  <FooterCommon linkNames="Order Status" />
                  <FooterCommon linkNames="Shopping Help" />
                </ul>
              </div>

              <div className="links-wrapper-4 col-sm-12 col-md">
                <h3>For Business</h3>
                <ul>
                  <FooterCommon linkNames="Apple and Business" />
                  <FooterCommon linkNames="Shop for Business" />
                </ul>

                <h3>For Education</h3>
                <ul>
                  <FooterCommon linkNames="Apple and Education" />
                  <FooterCommon linkNames="Shop for College" />
                </ul>

                <h3>For Healthcare</h3>
                <ul>
                  <FooterCommon linkNames="Manage Your Apple ID" />
                  <FooterCommon linkNames="Apple Store Account" />
                  <FooterCommon linkNames="iCloud.com" />
                </ul>

                <h3>For Government</h3>
                <ul>
                  <FooterCommon linkNames="Apple and Education" />
                  <FooterCommon linkNames="hop for College" />
                </ul>
              </div>

              <div className="links-wrapper-5 col-sm-12 col-md">
                <h3>Apple Values</h3>
                <ul>
                  <FooterCommon linkNames="Find a Store" />
                  <FooterCommon linkNames="Genius Bar" />
                  <FooterCommon linkNames="Today at Apple" />
                  <FooterCommon linkNames="Apple Camp" />
                  <FooterCommon linkNames="Field Trip" />
                  <FooterCommon linkNames="Apple Store App" />
                </ul>
                <h3>About Apple</h3>
                <ul>
                  <FooterCommon linkNames="Find a Store" />
                  <FooterCommon linkNames="Genius Bar" />
                  <FooterCommon linkNames="Today at Apple" />
                  <FooterCommon linkNames="Apple Camp" />
                  <FooterCommon linkNames="Field Trip" />
                  <FooterCommon linkNames="Apple Store App" />
                </ul>
              </div>
            </div>

            <div className="my-apple-wrapper">
              More ways to shop: <a href="#">Find an Apple Store</a> or{" "}
              <a href="#">other retailer</a> near you. Or call 1-800-MY-APPLE.
            </div>
            <div className="copyright-wrapper row">
              <div className="copyright col-sm-12 order-2 col-md-8 order-md-1 col-lg-4 order-lg-1">
                Copyright &copy; 2020 Apple Inc. All rights reserved.
              </div>
              <div className="footer-links-terms  col-sm-12 order-3 col-lg-6 order-lg-2">
                <ul>
                  <FooterCommon lastLinks="Privacy Policy" />
                  <FooterCommon lastLinks="Terms of Use" />
                  <FooterCommon lastLinks="Sales and Refunds" />
                  <FooterCommon lastLinks="Legal" />
                  <FooterCommon lastLinks="Site Map" />
                  {/* <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms of Use</a>
                  </li>
                  <li>
                    <a href="#">Sales and Refunds</a>
                  </li>
                  <li>
                    <a href="#">Legal</a>
                  </li>
                  <li>
                    <a href="#">Site Map</a>
                  </li> */}
                </ul>
              </div>
              <div className="footer-country  col-sm-12 order-1 col-md-4 order-md-2 text-md-right col-lg-2 order-lg-3">
                <div className="flag-wrapper">
                  <img src={icon16} />
                </div>{" "}
                <div className="footer-country-name">United States</div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
