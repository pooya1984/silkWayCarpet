import React, { Fragment, useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import PropTypes from "prop-types";
import Navbar from "../header/Navbar";
import Footer from "../header/Footer";
import Spinner from "../layout/Spinner";
import { connect } from "react-redux";
import { getProduct } from "../../actions/products";

const Products = ({ getProduct, product: { product, loading }, match }) => {
  useEffect(() => {
    getProduct(match.params.id);
  }, [getProduct, match.params.id]);

  console.log(product);

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <Navbar />
      <div className="item-box">
        <Carousel activeIndex={index} pause={true} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              className="d-block"
              src={`${product && product.img[0]}`}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block"
              src={`${product && product.img[1]}`}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block "
              src={`${product && product.img[2]}`}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>

        <div className="flex-column">
          <h3>{product && product.product}</h3>
          <p>{product && product.collections}</p>
          <p>
            {product && product.width}x{product && product.heigh}
          </p>
          <p>{product && product.raj}</p>
          <p>in Stock: {product && product.quantity}</p>
          <p>Year of Product: {product && product.madeYear}</p>
          {product && product.handmade === true ? <p>Handmade</p> : ""}
          {product && product.quantity >= 1 ? (
            <div>
              <button className="btn btn-outline-success">Add to Basket</button>
            </div>
          ) : (
            <p className=" text-danger">out of stock</p>
          )}
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

Products.propTypes = {
  getProduct: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  product: state.product,
  auth: state.auth,
});

export default connect(mapStateToProps, { getProduct })(Products);
