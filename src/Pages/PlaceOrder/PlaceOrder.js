import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";

const PlaceOrder = ({ product }) => {
  const { name, img, price } = product;
  const { user } = useAuth();
  const [placed, setPlaced] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  //order save to database
  const onSubmit = (data) => {
    data.productName = name;
    data.img = img;
    data.price = price;
    data.status = "Pending";
    console.log(data);
    fetch("https://blooming-brushlands-04717.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setPlaced(true);
          reset();
        }
      });
  };
  return (
    <div>
      <div className="lg:w-4/5 md:w-11/12 w-full mx-auto py-8 bg-pink-100 rounded shadow-md mb-10">
        <div className="text-center mt-4 mb-6">
          <h1 className="font-bold text-2xl mb-3">Place Your Order Here..</h1>
          <h2>Give your personal information to reach you</h2>
        </div>
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="lg:w-3/5 md:w-3/4 w-11/12 mx-auto mb-5"
          >
            <input
              type="text"
              {...register("name", { required: true })}
              className="py-2 px-3 rounded my-2 w-full border border-pink-200 focus:border-pink-500 focus:outline-none"
              defaultValue={user.displayName}
            />
            <br />
            <input
              type="email"
              {...register("email", { required: true })}
              className="py-2 px-3 rounded my-2 w-full border border-pink-200 focus:border-pink-500 focus:outline-none"
              defaultValue={user.email}
            />
            <br />

            <input
              type="text"
              className="py-2 px-3 rounded my-2 w-full border border-pink-200 focus:border-pink-500 focus:outline-none"
              {...register("address", { required: true })}
              placeholder="Your Address"
            />
            <br />
            <input
              type="number"
              className="py-2 px-3 rounded my-2 w-full border border-pink-200 focus:border-pink-500 focus:outline-none"
              {...register("phone", { required: true })}
              placeholder="Your Phone"
            />
            <br />

            <div className="text-center">
              <button
                type="submit"
                className="py-2 px-3 rounded shadow-md text-white font-semibold bg-pink-600 my-3 w-full"
              >
                Place Order
              </button>
            </div>
          </form>
          {placed && (
            <div
              className="bg-green-100 border-l-4 border-green-700 text-green-700 p-4 lg:w-3/5 md:w-3/4 mx-auto w-11/12"
              role="alert"
            >
              <h1 className="font-bold">Order Placed Successfully! </h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
