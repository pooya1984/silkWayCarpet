import React, { Fragment } from "react";
import PropTypes from "prop-types";

const ProductImg = ({ Img }) => {
  return (
    <Fragment>
      <img
        src={`${Img}`}
        alt={"product"}
        style={{ width: "300px", margin: "10px" }}
      />
    </Fragment>
  );
};

ProductImg.propTypes = {
  Img: PropTypes.object.isRequired,
};

export default ProductImg;
