import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import Products from "../Products/Products";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Banner />

      <Products></Products>
      <Features />
      <Testimonial></Testimonial>
      <Footer />
    </div>
  );
};

export default Home;
