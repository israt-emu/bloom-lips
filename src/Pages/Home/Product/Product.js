import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { name, img, description, _id, color, price } = product;
  return (
    <div className="h-full shadow-md p-4">
      <div className="px-4">
        <img src={img} alt="" />
      </div>
      <div className="pl-4 pt-2">
        <h1 className="font-semibold">
          Color:
          <i className="fas fa-bahai text-lg" style={{ color: `${color}` }}></i>
        </h1>
        <h1 className="font-semibold my-1">{name}</h1>
        <h1>Price: ${price}</h1>
        <p className="text-sm my-2">{description.slice(0, 100)}...</p>
        <div></div>
        <Link to={`/details/${_id}`}>
          <button className="py-2 px-3 rounded text-white bg-pink-600 text-sm">
            Purchase Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Product;
