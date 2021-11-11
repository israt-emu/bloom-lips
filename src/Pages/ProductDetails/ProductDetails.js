import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import Navigation from "../Shared/Navigation/Navigation";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://blooming-brushlands-04717.herokuapp.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <div>
      <Navigation />
      <div className="container mx-auto">
        <h1>{product.name}</h1>
        <img src={product.img} alt="" />
      </div>
    </div>
  );
};

export default ProductDetails;
