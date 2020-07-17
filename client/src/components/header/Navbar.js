import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Navbar = ({ isAuthenticated, user }) => {
  return (
    <Fragment>
      <nav
        class="navbar navbar-expand-md  navbar-dark"
        style={{ backgroundColor: "black" }}
      >
        <Link class="navbar-brand m-2" href="#">
          <p className="h1">SILK WAY CARPET</p>
          <p className="h4 text-secondary">Online Store</p>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
          aria-controls="collapsibleNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse flex-row-reverse"
          id="collapsibleNavbar"
        >
          <ul className="navbar-nav">
            <li className="nav-item m-4 ">
              <Link className="nav-link text-light " href="#">
                <i className="fas fa-store"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light m-4 " to={"/"}>
                <i className="fas fa-home"></i>
              </Link>
            </li>
            {isAuthenticated ? (
              <li className="nav-item">
                <Link className="nav-link text-light m-4" href="#">
                  <i className="fas fa-shopping-cart"></i>
                </Link>
              </li>
            ) : (
              <div></div>
            )}
            <li className="nav-item">
              {!isAuthenticated ? (
                <Link className="nav-link text-light m-4" to={"/"}>
                  <small> sign In</small>
                </Link>
              ) : (
                <Fragment>
                  <p className="nav-link text-light m-4">
                    welcome {user && user.name}
                  </p>
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};
Navbar.propTypes = {
  user: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
});

export default connect(mapStateToProps)(Navbar);
