import React, { Fragment } from "react";
import Navbar from "../header/Navbar";
import Footer from "../header/Footer";
import ProductsImg from "../products/ProductsImg";

const Landing = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="d-flex flex-wrap">
        <ProductsImg />
      </div>
      <h1 style={{ padding: "30px" }}>New Gallery</h1>
      <Footer />
    </Fragment>
  );
};

export default Landing;
