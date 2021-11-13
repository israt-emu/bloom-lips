import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const size = 6;
  useEffect(() => {
    fetch(
      `https://blooming-brushlands-04717.herokuapp.com/products?size=${size}`
    )
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
    <div className="md:w-4/5 w-11/12 mx-auto py-12">
      <h1 className="text-center text-3xl font-semibold mt-6 mb-10">
        Our Latest Products
      </h1>
      <div className="shadow-md p-5">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          {products.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
      </div>
      <div className="text-center mt-8">
        <Link to="/explore">
          <button className="text-pink-600 border-2 border-pink-600 px-3 py-2 text-md rounded shadow-lg hover:bg-pink-600 hover:text-white transition ease-in-out">
            Explore More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Products;
