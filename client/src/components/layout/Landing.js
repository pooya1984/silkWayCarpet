import React, { Fragment } from "react";
import Navbar from "../header/Navbar";
import Footer from "../header/Footer";
import Login from "../auth/Login";

const Landing = () => {
  return (
    <Fragment>
      <Navbar />
      <Login />
      <Footer />
    </Fragment>
  );
};

export default Landing;
