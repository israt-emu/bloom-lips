import React from "react";
import {useForm} from "react-hook-form";
import {useLocation, useHistory} from "react-router";
import {Link} from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import login from "../../images/login.png";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";

const Login = () => {
  const {googleSignIn, loginWithEmailPass, error} = useAuth();
  const location = useLocation();
  const history = useHistory();
  const {register, handleSubmit, reset} = useForm();
  //sign in with email pass
  const onSubmit = (data) => {
    loginWithEmailPass(data.email, data.password, location, history);
    reset();
  };
  //sign in with google
  const handleGoogleSign = () => {
    googleSignIn(location, history);
  };

  return (
    <>
      <Navigation></Navigation>
      <div className="login container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <h1 className="text-center font-bold text-2xl mb-3">Please Login</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="w-4/5 mx-auto">
              <input type="email" {...register("email", {required: true})} className="py-2 px-3 rounded my-2 w-full border border-pink-200 focus:border-pink-500 focus:outline-none" />
              <br />

              <input type="password" className="py-2 px-3 rounded my-2 w-full border border-pink-200 focus:border-pink-500 focus:outline-none" {...register("password", {required: true})} />
              <br />

              <div className="text-center">
                <button type="submit" className="py-2 px-3 rounded shadow-md text-white font-semibold bg-pink-600 my-3 w-full">
                  Sign In
                </button>
              </div>
            </form>
            <h1 className="text-center text-red-500">{error}</h1>
            <Link to="/register">
              <h1 className="text-center font-semibold my-3">New to Website?Please Register</h1>
            </Link>
            <h1 className="text-center">---------OR--------</h1>
            <div className="text-center">
              <button type="submit" className="py-2 px-3 rounded shadow-md text-pink-600 font-semibold border border-pink-600 my-3 w-2/5" onClick={handleGoogleSign}>
                <i className="fab fa-google mr-2"></i>
                Sign In With Google
              </button>
            </div>
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

export default Login;
