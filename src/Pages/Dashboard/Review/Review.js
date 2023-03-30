import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Review = () => {
  const {user} = useAuth();
  const [review, setReview] = useState(false);
  const {register, handleSubmit, reset} = useForm();
  //saved review to database
  const onSubmit = (data) => {
    data.client = user.displayName;
    fetch("https://bloom-lips-server.onrender.com/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setReview(true);
          reset();
        }
      });
  };
  return (
    <div>
      <div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 bg-coolGray-50 text-coolGray-800 mx-auto">
        <div className="flex flex-col items-center w-full">
          <h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2>
          <div className="flex flex-col items-center py-6 space-y-3">
            <span className="text-center">How was your experience?</span>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full" onFocus={() => setReview(false)}>
            <textarea rows="3" placeholder="Message..." className="p-4 rounded-md resize-none border border-pink-200 focus:border-pink-500 focus:outline-none" {...register("review", {required: true})}></textarea>
            <br />
            <input type="number" placeholder="Your Rating(0-5)" {...register("rating", {required: true})} min="0" max="5" step="any" className="p-3 rounded-md border border-pink-200 focus:border-pink-500 focus:outline-none" />
            <button type="submit" className="py-3 my-8 font-semibold rounded-md text-pink-600" style={{boxShadow: "0 4px 14px 2px rgb(255, 192, 203,0.8)"}}>
              Leave feedback
            </button>
          </form>
          {review && (
            <div className="bg-green-100 border-l-4 border-green-700 text-green-700 p-4 w-4/5 mx-auto mb-3" role="alert">
              <h1 className="font-bold">Thanks For Your Review & Opinion! </h1>
            </div>
          )}
        </div>
        <div className="flex items-center justify-center">
          <Link to="/" className="text-xl text-pink-600">
            Maybe later...
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Review;
