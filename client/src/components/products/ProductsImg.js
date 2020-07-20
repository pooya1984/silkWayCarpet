import React, { Fragment, useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import PropTypes from "prop-types";
import Img from "../../img/oakImage.jpg";

const ProductImg = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Fragment>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img className="d-block w-100" src={Img} alt="First slide" />
          <Carousel.Caption>
            <div className="btn btn-outline-light">See More</div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Img} alt="Second slide" />

          <Carousel.Caption>
            <div className="btn btn-outline-light">See More</div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Img} alt="Third slide" />

          <Carousel.Caption>
            <div className="btn btn-outline-light">See More</div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Fragment>
  );
};

ProductImg.propTypes = {
  Img: PropTypes.object.isRequired,
};

ProductImg.propTypes = {
  Img: PropTypes.object.isRequired,
};

export default ProductImg;
