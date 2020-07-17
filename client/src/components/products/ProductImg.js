import React, { Fragment } from "react";
import PropTypes from "prop-types";

const ProductImg = ({ Img: { img, product } }) => {
  return (
    <Fragment>
      <img
        src={`${img[0]}`}
        alt={product}
        style={{ width: "300px", margin: "10px" }}
      />
    </Fragment>
  );
};

ProductImg.propTypes = {
  Img: PropTypes.object.isRequired,
};

export default ProductImg;
