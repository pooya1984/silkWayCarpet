import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import Navbar from "../header/Navbar";
import Footer from "../header/Footer";
import Spinner from "../layout/Spinner";
import { connect } from "react-redux";
import { getProducts } from "../../actions/products";
import ProductsItem from "./ProductsItem";

const Products = ({ getProducts, product: { products, loading } }) => {
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <Navbar />

      <div className="d-flex flex-wrap">
        {products.map((product) => (
          <ProductsItem key={product._id} product={product} />
        ))}
      </div>
      <Footer />
    </Fragment>
  );
};

Products.propTypes = {
  getProducts: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  product: state.product,
  auth: state.auth,
});

export default connect(mapStateToProps, { getProducts })(Products);
