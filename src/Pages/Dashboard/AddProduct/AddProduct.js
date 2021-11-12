import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const [add, setAdd] = useState(false);
  const onSubmit = (data) => {
    console.log(data);
    fetch("https://blooming-brushlands-04717.herokuapp.com/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setAdd(true);
          reset();
        }
      });
  };
  return (
    <div className="lg:w-4/5 md:w-11/12 w-full mx-auto py-8 bg-pink-100 rounded shadow-md mt-10">
      <h1 className="text-center md:text-3xl text-2xl font-semibold mb-4">
        Add a New Product
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-4/5 mx-auto"
        onFocus={() => setAdd(false)}
      >
        <input
          type="text"
          {...register("name", { required: true })}
          placeholder="Product Name"
          className="py-2 px-3 rounded my-2 w-full border border-pink-200 focus:border-pink-500 focus:outline-none"
        />
        <br />

        <input
          type="text"
          className="py-2 px-3 rounded my-2 w-full border border-pink-200 focus:border-pink-500 focus:outline-none"
          placeholder="Put a link of Image"
          {...register("img", { required: true })}
        />
        <br />
        <textarea
          cols="30"
          rows="4"
          className="py-2 px-3 rounded my-2 w-full border border-pink-200 focus:border-pink-500 focus:outline-none"
          placeholder="About the Product"
          {...register("description", { required: true })}
        ></textarea>
        <br />
        <input
          type="number"
          className="py-2 px-3 rounded my-2 w-full border border-pink-200 focus:border-pink-500 focus:outline-none"
          placeholder="Price"
          {...register("price", { required: true })}
        />
        <br />
        <input
          type="text"
          className="py-2 px-3 rounded my-2 w-full border border-pink-200 focus:border-pink-500 focus:outline-none"
          placeholder="Input a Hex color code"
          {...register("color", { required: true })}
        />
        <br />

        <div className="text-center">
          <button
            type="submit"
            className="py-2 px-3 rounded shadow-md text-white font-semibold bg-pink-600 my-3 w-full"
          >
            Add Product
          </button>
        </div>
      </form>
      {add && (
        <div
          className="bg-green-100 border-l-4 border-green-700 text-green-700 p-4 w-4/5 mx-auto"
          role="alert"
        >
          <h1 className="font-bold">Added Product Successfully! </h1>
        </div>
      )}
    </div>
  );
};

export default AddProduct;
