import React, { useEffect, useState } from "react";
import ManageSingle from "../ManageSingle/ManageSingle";

const ManageProduct = () => {
  const [products, setProducts] = useState([]);
  const [change, setChange] = useState(false);
  useEffect(() => {
    fetch(`https://blooming-brushlands-04717.herokuapp.com/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, [change]);
  return (
    <div>
      <div className="lg:w-4/5 w-11/12 mx-auto py-12">
        <h1 className="text-center font-semibold text-3xl mb-12">
          All Products
        </h1>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
          {products.map((product) => (
            <ManageSingle
              key={product._id}
              product={product}
              change={change}
              setChange={setChange}
            ></ManageSingle>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageProduct;
