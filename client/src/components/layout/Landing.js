import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import Navbar from "../header/Navbar";
import Footer from "../header/Footer";
import Spinner from "./Spinner";
import { connect } from "react-redux";
import Login from "../auth/Login";

const Landing = () => {
  return (
    <Fragment>
      <Navbar />
      {/* <div>
            {products.map((product) => {
              <Products key={product._id} product={product} />;
            })}
          </div> */}
      <Login />
      <Footer />
    </Fragment>
  );
};

export default Landing;
