import React, { Fragment } from "react";
import Navbar from "../header/Navbar";
import Footer from "../header/Footer";
import { Link } from "react-router-dom";
import Galleries from "./Gallery";
import ProductsImg from "../products/ProductsImg";

const Landing = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="d-flex flex-wrap">
        <ProductsImg />
      </div>
      <h1 style={{ padding: "30px" }}>New Gallery</h1>
      <Galleries />
      <Link
        style={{
          textAlign: "center",
          marginLeft: "46%",
          marginBottom: "20px",
          marginTop: "10px",
        }}
        className="btn btn-outline-dark"
        to="/products"
      >
        See More
      </Link>
      <Footer />
    </Fragment>
  );
};

export default Landing;
