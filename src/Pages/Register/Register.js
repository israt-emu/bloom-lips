import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";
import {useHistory} from "react-router";
import useAuth from "../../hooks/useAuth";
import login from "../../images/login.png";
import Navigation from "../Shared/Navigation/Navigation";
import Footer from "../Shared/Footer/Footer";

const Register = () => {
  const {registration, error} = useAuth();

  const history = useHistory();
  const {register, handleSubmit, reset} = useForm();
  const onSubmit = (data) => {
    registration(data.name, data.email, data.password, history);
    reset();
  };

  return (
    <>
      <Navigation></Navigation>
      <div className="login container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 align-items-center">
          <div>
            <h1 className="text-center font-bold text-2xl mb-3">Please Register</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="w-4/5 mx-auto">
              <input type="text" {...register("name", {required: true})} className="py-2 px-3 rounded my-2 w-full border border-pink-200 focus:border-pink-500 focus:outline-none" />
              <br />
              <input type="email" {...register("email", {required: true})} className="py-2 px-3 rounded my-2 w-full border border-pink-200 focus:border-pink-500 focus:outline-none" />
              <br />

              <input type="password" className="py-2 px-3 rounded my-2 w-full border border-pink-200 focus:border-pink-500 focus:outline-none" {...register("password", {required: true})} />
              <br />

              <div className="text-center">
                <button type="submit" className="py-2 px-3 rounded shadow-md text-white font-semibold bg-pink-600 my-3 w-full">
                  Register
                </button>
              </div>
            </form>
            <h1 className="text-center text-red-500">{error}</h1>

            <Link to="/login">
              <h1 className="text-center font-semibold my-3">Already Registered?Please Login</h1>
            </Link>
          </div>
          <div className="mx-auto mt-4">
            <img src={login} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
