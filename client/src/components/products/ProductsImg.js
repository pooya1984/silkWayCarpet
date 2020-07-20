import React, { Fragment, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import PropTypes from "prop-types";
import Img from "../../img/oakImage.jpg";
import Login from "../auth/Login";

const ProductImg = () => {
  const [index, setIndex] = useState(0);
  const [showThree, setShowThree] = useState(false);
  const [showTwo, setShowTwo] = useState(false);
  const [showOne, setShowOne] = useState(false);

  const handleCloseThree = () => setShowThree(false);
  const handleCloseTwo = () => setShowTwo(false);
  const handleCloseOne = () => setShowOne(false);

  const handleShowThree = () => setShowThree(true);
  const handleShowTwo = () => setShowTwo(true);
  const handleShowOne = () => setShowOne(true);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Fragment>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img className="d-block w-100" src={Img} alt="First slide" />
          <Carousel.Caption>
            <Link className="btn btn-outline-light" onClick={handleShowOne}>
              See More
            </Link>
            <Modal show={showOne} onHide={handleCloseOne}>
              <Modal.Header closeButton>
                <Modal.Title>Sign In</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Login />
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseOne}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Img} alt="Second slide" />

          <Carousel.Caption>
            <Link className="btn btn-outline-light" onClick={handleShowTwo}>
              See More
            </Link>
            <Modal show={showTwo} onHide={handleCloseTwo}>
              <Modal.Header closeButton>
                <Modal.Title>Sign In</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Login />
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseTwo}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Img} alt="Third slide" />

          <Carousel.Caption>
            <Link className="btn btn-outline-light" onClick={handleShowThree}>
              See More
            </Link>
            <Modal show={showThree} onHide={handleCloseThree}>
              <Modal.Header closeButton>
                <Modal.Title>Sign In</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Login />
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseThree}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
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
