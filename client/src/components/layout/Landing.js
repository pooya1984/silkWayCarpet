import React, { Fragment } from "react";
import Navbar from "../header/Navbar";
import Footer from "../header/Footer";
import Products from "../products/Products";

const Landing = () => {
  return (
    <Fragment>
      <Navbar />
      <Products />
      <Footer />
    </Fragment>
  );
};

export default Landing;
