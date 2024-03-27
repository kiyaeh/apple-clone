import React, { Component } from "react";
//IMAGES
import logo from "../../CommonResources/images/icons/logo-sm.png";
import search from "../../CommonResources/images/icons/search-icon-sm.png";
import cart from "../../CommonResources/images/icons/cart-sm.png";
//COMPONENT
import Nav from "./Nav";
import { Link } from "react-router-dom";
class Header extends Component {
  render() {
    return (
      <div>
        <div className="nav-wrapper fixed-top">
          <div className="container">
            <nav className="navbar navbar-toggleable-sm navbar-expand-md">
              <button
                className="navbar-toggler navbar-toggler-right"
                type="button"
                data-toggle="collapse"
                data-target=".navbar-collapse"
              >
                ☰
              </button>

              <Link className="navbar-brand mx-auto" to="/">
                <img src={logo} />
              </Link>

              <div className="navbar-collapse collapse">
                <ul className="navbar-nav nav-justified w-100 nav-fill">
                  {/* starts here */}

                  <Nav linkName="Mac" linkUrl="/mac" />

                  <Nav linkName="iphone" linkUrl="/iphone" />

                  <Nav linkName="ipad" linkUrl="/ipad" />

                  <Nav linkName="watch" linkUrl="/watch" />

                  <Nav linkName="Tv" linkUrl="/tv" />

                  <Nav linkName="Music" linkUrl="/music" />

                  <Nav linkName="Support" linkUrl="/support" />

                  <li className="nav-item">
                    <Link className="nav-link js-scroll-trigger" to="/search/">
                      <img src={search} />
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link class="nav-link js-scroll-trigger" to="/cart/">
                      <img src={cart} />
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>

        {/* <!-- Alert Section --> */}
        <div>
          <section className="alert-section top-50">
            <div className="container">
              <div className="alert-title">We’re open for you.</div>
              <div className="alert-text">
                Our retail stores are closed, but you can buy our products here
                online and get fast, free delivery. If you need help finding the
                right product or have a question on your order, chat online with
                a Specialist or call 1-800-MY-APPLE.
                <br />
                For service and support, visit{" "}
                <a href="https://support.apple.com/">support.apple.com</a>.
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Header;
