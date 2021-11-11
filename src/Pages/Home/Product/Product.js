import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <div className="h-full shadow p-4">
      <div className="p-4">
        <img src={product.img} alt="" />
      </div>
      <h1>{product.name}</h1>
      <div>
        <i className="fas fa-smile" style={{ color: `${product.color}` }}></i>
      </div>
      <Link to={`/details/${product._id}`}>
        <button className="py-2 px-3 rounded text-white bg-pink-600">
          Purchase Now
        </button>
      </Link>
    </div>
  );
};

export default Product;
