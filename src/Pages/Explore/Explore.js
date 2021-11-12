import React, { useEffect } from "react";
import { useState } from "react";
import Product from "../Home/Product/Product";
import Navigation from "../Shared/Navigation/Navigation";

const Explore = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://blooming-brushlands-04717.herokuapp.com/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return (
      <div className="mt-12">
        <div className="flex items-center justify-center space-x-2 animate-bounce">
          <div className="w-8 h-8 bg-pink-300 rounded-full"></div>
          <div className="w-8 h-8 bg-pink-500 rounded-full"></div>
          <div className="w-8 h-8 bg-pink-700 rounded-full"></div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Navigation />
      <div className="md:w-11/12 w-4/5 mx-auto py-12">
        <h1 className="text-center font-semibold text-3xl mt-4 mb-12">
          Explore Our Latest Products
        </h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-6">
          {products.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
