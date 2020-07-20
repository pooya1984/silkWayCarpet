import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import PropTypes from "prop-types";
import Login from "../auth/Login";

const Navbar = ({ isAuthenticated, user }) => {
  const [show, setShow] = useState(false);
  const [showS, setShowS] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseS = () => setShow(false);
  const handleShowS = () => setShow(true);

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
              {isAuthenticated ? (
                <Link className="nav-link text-light " to="/products">
                  <i className="fas fa-store"></i>
                </Link>
              ) : (
                <Fragment>
                  <Link className="nav-link text-light " onClick={handleShowS}>
                    <i className="fas fa-store"></i>
                  </Link>
                  <Modal show={showS} onHide={handleCloseS}>
                    <Modal.Header closeButton>
                      <Modal.Title>Sign In</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Login />
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleCloseS}>
                        Close
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </Fragment>
              )}
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light m-4 " to={"/"}>
                <i className="fas fa-home"></i>
              </Link>
            </li>
            {isAuthenticated ? (
              <li className="nav-item">
                <Link className="nav-link text-light m-4" to="#">
                  <i className="fas fa-shopping-cart"></i>
                </Link>
              </li>
            ) : (
              <div></div>
            )}
            <li className="nav-item">
              {!isAuthenticated ? (
                <Fragment>
                  <Link
                    className="nav-link text-light m-4"
                    onClick={handleShow}
                  >
                    <small> sign In</small>
                  </Link>
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Sign In</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Login />
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </Fragment>
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
