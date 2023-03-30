import React, {useEffect} from "react";
import {useState} from "react";
import {useParams} from "react-router";
import PlaceOrder from "../PlaceOrder/PlaceOrder";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const {id} = useParams();
  useEffect(() => {
    fetch(`https://bloom-lips-server.onrender.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  const {name, img, color, description, price} = product;
  return (
    <div>
      <Navigation />
      <div className="container mx-auto">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div className="lg:pr-10">
              <i className="fas fa-bahai text-3xl" style={{color: `${color}`}}></i>
              <h5 className="my-4 md:text-4xl text-2xl font-extrabold leading-none">{name}</h5>
              <h1 className="mb-4 font-bold text-xl">Price: ${price}</h1>
              <p className="mb-6 text-gray-900">{description}</p>
              <hr className="mb-5 border-gray-300" />
              <div className="flex items-center space-x-4">
                <a href="/">
                  <i className="fab fa-facebook text-2xl text-pink-500"></i>
                </a>
                <a href="/">
                  <i className="fab fa-twitter text-2xl text-pink-500"></i>
                </a>
                <a href="/">
                  <i className="fab fa-pinterest text-2xl text-pink-500"></i>
                </a>
                <a href="/">
                  <i className="fab fa-instagram text-2xl text-pink-500"></i>
                </a>
              </div>
            </div>
            <div>
              <img className="w-full rounded shadow-lg " src={img} alt="" />
            </div>
          </div>
        </div>
        <PlaceOrder product={product}></PlaceOrder>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
