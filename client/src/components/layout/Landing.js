import React from "react";
import { Redirect } from "react-router-dom";
import Navbar from "../header/Navbar";
import Footer from "../header/Footer";

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <section className="landing">
      <Navbar />
      <p>Hello</p>
      <Footer />
    </section>
  );
};

export default Landing;
