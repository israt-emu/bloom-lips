import React, { useEffect, useState } from "react";
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
    <div className="text-center container mx-auto py-12">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-6">
        {products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
