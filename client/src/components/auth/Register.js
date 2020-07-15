import React, { useState, Fragment } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import Navbar from "../header/Navbar";
import Footer from "../header/Footer";
import PropTypes from "prop-types";

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onchange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("password do not match", "danger");
    } else {
      register({ name, email, password });
    }
  };

  //Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/products" />;
  }

  return (
    <Fragment>
      <Navbar />
      <div className="loging-box">
        <form onSubmit={(e) => onSubmit(e)}>
          <p>user name</p>
          <input
            type="text"
            placeholder="user name"
            name="name"
            value={name}
            onChange={(e) => onchange(e)}
          />

          <div>
            <p> Email</p>
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={(e) => onchange(e)}
            />
          </div>
          <p>password</p>
          <div>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => onchange(e)}
              minLength="6"
            />
          </div>
          <p>confirm password</p>
          <div>
            <input
              type="password"
              placeholder="confirm password"
              name="password2"
              value={password2}
              onChange={(e) => onchange(e)}
              minLength="6"
            />
          </div>
          <button>sign Up</button>
          <p>
            Do you have already an Account? then{" "}
            <Link to="/">
              <span>Sign In</span>
            </Link>
          </p>
        </form>
      </div>
      <Footer />
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

export default connect(mapStateToProps, { setAlert, register })(Register);
