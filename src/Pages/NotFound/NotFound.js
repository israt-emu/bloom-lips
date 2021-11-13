import React from "react";
import error from "../../images/404.jpg";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";

const NotFound = () => {
  return (
    <div>
      <Navigation />
      <img src={error} alt="" className="mx-auto mt-6" />
      <Footer />
    </div>
  );
};

export default NotFound;
