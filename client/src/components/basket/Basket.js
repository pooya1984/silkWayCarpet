import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Navbar from "../header/Navbar";
import Footer from "../header/Footer";
import Spinner from "../layout/Spinner";
import { connect } from "react-redux";

const Basket = ({ auth: { user }, loading }) => {
  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <Navbar />
      <div>
        <p>Hi {user && user.name}!</p>
        <p>your basket is emoty</p>
      </div>
      <Footer />
    </Fragment>
  );
};

Basket.propTypes = {
  product: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Basket);
