import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";
import PropTypes from "prop-types";

const Footer = ({ isAuthenticated, logout }) => {
  return (
    // <!-- Footer -->
    <Fragment>
      <footer
        className="page-footer font-small sticky-bottom "
        style={{ backgroundColor: "black", color: "white" }}
      >
        <div className="container text-center text-md-left">
          {/* <!-- Grid row --> */}
          <div className="row">
            {/* <!-- Grid column --> */}
            <div className="col-md-4 mx-auto">
              {/* <!-- Content --> */}
              <h5 className="font-weight-bold text-uppercase mt-3 mb-4">
                About Silk Way Carpet
              </h5>
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </div>
            {/* <!-- Grid column --> */}

            {/* <!-- Grid column --> */}
            <div className="col-md-2 mx-auto">
              {/* <!-- Links --> */}
              <h6 className="font-weight-bold text-uppercase mt-3 mb-4">
                Customer Service
              </h6>
            </div>
            {/* <!-- Grid column --> */}

            {/* <!-- Grid column --> */}
            <div className="col-md-2 mx-auto">
              {/* <!-- Links --> */}
              <h6 className="font-weight-bold text-uppercase mt-3 mb-4">
                Contact
              </h6>
            </div>
            {/* <!-- Grid column --> */}

            {/* <!-- Grid column --> */}
            <div className="col-md-2 mx-auto">
              {/* <!-- Links --> */}
              <h6 className="font-weight-bold text-uppercase mt-3 mb-4">
                Informations
              </h6>
            </div>
            {/* <!-- Grid column --> */}
          </div>
        </div>

        <hr
          style={{
            backgroundColor: "white",
            height: 0.1,
          }}
        />

        {/* <!-- Call to action --> */}
        <ul className="list-unstyled list-inline text-center py-2">
          {!isAuthenticated ? (
            <Fragment>
              <li className="list-inline-item">
                <h5 className="mb-1">Register for free</h5>
              </li>
              <li className="list-inline-item">
                <Link className="btn btn-danger btn-rounded" to={"/Register"}>
                  Sign up!
                </Link>
              </li>
            </Fragment>
          ) : (
            <Fragment>
              <li className="list-inline-item">
                <div className="btn btn-danger btn-rounded" onClick={logout}>
                  Log Out
                </div>
              </li>
            </Fragment>
          )}
        </ul>

        {/* <!-- Social buttons --> */}
        <ul className="list-unstyled list-inline text-center">
          <li className="list-inline-item">
            <div className="btn-floating btn-fb mx-1">
              <i className="fab fa-facebook-f"> </i>
            </div>
          </li>
          <li className="list-inline-item">
            <div className="btn-floating btn-tw mx-1">
              <i className="fab fa-twitter"> </i>
            </div>
          </li>
          <li className="list-inline-item">
            <div className="btn-floating btn-gplus mx-1">
              <i className="fab fa-google-plus-g"> </i>
            </div>
          </li>
          <li className="list-inline-item">
            <div className="btn-floating btn-li mx-1">
              <i className="fab fa-linkedin-in"> </i>
            </div>
          </li>
          <li className="list-inline-item">
            <div className="btn-floating btn-dribbble mx-1">
              <i className="fab fa-dribbble"> </i>
            </div>
          </li>
        </ul>
        {/* <!-- Social buttons --> */}

        {/* <!-- Copyright --> */}
        <div className="footer-copyright text-center py-3">
          Powered by Genesis
        </div>
      </footer>
    </Fragment>
  );
};

Footer.propTypes = {
  isAuthenticated: PropTypes.bool,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(Footer);
