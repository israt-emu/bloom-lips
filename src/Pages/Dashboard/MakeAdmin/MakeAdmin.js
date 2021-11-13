import React, { useState } from "react";
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
  const { register, handleSubmit, reset } = useForm();
  const [isAdmin, setIsAdmin] = useState(false);
  //make admin an user
  const onSubmit = (data) => {
    fetch("https://blooming-brushlands-04717.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setIsAdmin(true);
        }
      });
    reset();
  };
  return (
    <div className="px-4 pt-8">
      <h1 className="text-center text-3xl font-semibold my-8">
        Make Admin a User
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="md:w-3/5 w-11/12 mx-auto"
      >
        <input
          type="email"
          {...register("email", { required: true })}
          className="py-2 px-3 rounded my-2 w-full border border-pink-200 focus:border-pink-500 focus:outline-none"
          onFocus={() => setIsAdmin(false)}
        />
        <br />
        <div className="text-center">
          <button
            type="submit"
            className="py-2 px-3 rounded shadow-md text-white font-semibold bg-pink-600 my-3 w-full"
          >
            Make Admin
          </button>
        </div>
      </form>
      {isAdmin && (
        <div
          className="bg-green-100 border-l-4 border-green-700 text-green-700 p-4 md:w-3/5 mx-auto w-11/12"
          role="alert"
        >
          <h1 className="font-bold">Create Admin Successfully! </h1>
        </div>
      )}
    </div>
  );
};

export default MakeAdmin;
