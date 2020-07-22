import React, { useState, useReducer } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ProductsItem = ({
  product: {
    _id,
    img,
    size,
    collections,
    product,
    description,
    price,
    width,
    heigh,
    raj,
    madeYear,
    handmade,
    quantity,
  },
}) => {
  const [index, setIndex] = useState(0);
  var [quantity, dispatch] = useReducer((state, action) => {
    if (action === "remove") {
      return state - 1;
    }
    return state;
  }, quantity);

  console.log(quantity);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div class="d-flex flex-column">
      <div className="items-box">
        <div className="flex-column flex-wrap">
          <div className="crasoul-box">
            <Carousel activeIndex={index} pause={true} onSelect={handleSelect}>
              <Carousel.Item>
                <img className="d-block" src={`${img[0]}`} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block" src={`${img[1]}`} alt="Second slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block " src={`${img[2]}`} alt="Third slide" />
              </Carousel.Item>
            </Carousel>
          </div>
          <h3>{product}</h3>
          <p style={{ width: "70%" }}>{description}</p>
          <p>in Stock: {quantity}</p>
          <p>{price}€</p>
        </div>

        <div className="flex-column">
          <p>{collections}</p>
          <p>
            {width}x{heigh}
          </p>
          <p>{raj}</p>
          <p>Year of Product: {madeYear}</p>
          {handmade === true ? <p>Handmade</p> : ""}
          <Link className="btn btn-outline-light" to={`/products/${_id}`}>
            Detail
          </Link>
          {quantity >= 1 ? (
            <div>
              <button
                className="btn btn-outline-success"
                onClick={() => dispatch("remove")}
              >
                Add to Basket
              </button>
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
