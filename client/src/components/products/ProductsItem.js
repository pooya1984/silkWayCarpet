import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ProductsImg from "./ProductsImg";

const ProductsItem = ({
  product: {
    _id,
    img,
    size,
    collections,
    product,
    width,
    heigh,
    raj,
    madeYear,
    handmade,
    quantity,
  },
}) => {
  return (
    <div>
      <div>
        {img.map((Img) => (
          <ProductsImg key={Img._id} Img={Img} />
        ))}
      </div>
      <div className="items-box">
        <img
          src={`${img[0]}`}
          alt={product}
          style={{ width: "300px", margin: "10px" }}
        />
        <div className="flex-column">
          <h3>{product}</h3>
          <p>{collections}</p>
          <p>
            {width}x{heigh}
          </p>
          <p>{raj}</p>
          <p>in Stock: {quantity}</p>
          <p>Year of Product: {madeYear}</p>
          {handmade === true ? <p>Handmade</p> : ""}
          <Link className="btn btn-outline-light" to={`/products/${_id}`}>
            Detail
          </Link>
          {quantity >= 1 ? (
            <div>
              <button className="btn btn-outline-success">Add to Basket</button>
            </div>
          ) : (
            <p className=" text-danger">out of stock</p>
          )}
        </div>
        {/* <p>{collections}</p> */}
      </div>
    </div>
  );
};

ProductsItem.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductsItem;
