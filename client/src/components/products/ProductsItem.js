import React, { Fragment as div } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const ProductsItem = ({ product: { _id, img, size, collections } }) => {
  return (
    <div className="loging-box">
      {/* <img src={img} /> */}
      <p>{size}</p>
      {/* <p>{collections}</p> */}
    </div>
  );
};

ProductsItem.propTypes = {
  product: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(ProductsItem);
