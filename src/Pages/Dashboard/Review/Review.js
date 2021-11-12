import React from "react";
import { Link } from "react-router-dom";

const Review = () => {
  return (
    <div>
      <div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 bg-coolGray-50 text-coolGray-800 mx-auto">
        <div className="flex flex-col items-center w-full">
          <h2 className="text-3xl font-semibold text-center">
            Your opinion matters!
          </h2>
          <div className="flex flex-col items-center py-6 space-y-3">
            <span className="text-center">How was your experience?</span>
          </div>
          <div className="flex flex-col w-full">
            <textarea
              rows="3"
              placeholder="Message..."
              className="p-4 rounded-md resize-none border border-pink-200 focus:border-pink-500 focus:outline-none"
            ></textarea>
            <br />
            <input
              type="number"
              placeholder="Your Rating(0-5)"
              min="0"
              max="5"
              className="p-3 rounded-md border border-pink-200 focus:border-pink-500 focus:outline-none"
            />
            <button
              type="button"
              className="py-3 my-8 font-semibold rounded-md text-pink-600"
              style={{ boxShadow: "0 4px 14px 2px rgb(255, 192, 203,0.8)" }}
            >
              Leave feedback
            </button>
          </div>
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
