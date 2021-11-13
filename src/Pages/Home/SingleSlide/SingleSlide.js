import React from "react";
import Rating from "react-rating";

const SingleSlide = ({ review }) => {
  return (
    <div>
      <div className="flex flex-col lg:w-3/5 w-11/12 mx-auto my-12 shadow-xl h-full bg-white rounded">
        <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-6 text-center">
          <Rating
            initialRating={review.rating}
            emptySymbol="far fa-star text-yellow-400 text-xl"
            fullSymbol="fas fa-star text-yellow-400 text-xl"
            readonly
          ></Rating>
          <span className="font-semibold">({review.rating})</span>
          <p className="relative px-6 py-1 text-md italic text-center text-coolGray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="currentColor"
              className="w-6 h-6 text-violet-600"
            >
              <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
              <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
            </svg>
            <p className="text-md">{review.review}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="currentColor"
              className="absolute right-0 w-6 h-6 text-violet-600"
            >
              <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
              <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
            </svg>
          </p>
        </div>
        <div className="flex flex-col items-center justify-center p-6 rounded-b-lg bg-pink-500">
          <p className="text-xl font-semibold leading-tight text-white">
            {review.client}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleSlide;
