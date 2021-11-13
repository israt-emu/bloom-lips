import React from "react";
import banner from "../../../images/b.jpg";

const Banner = () => {
  return (
    <div>
      <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 z-0 -mt-5">
        <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <svg
            className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
          <img
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            src={banner}
            alt=""
          />
        </div>
        <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <p className="inline-block px-1 mb-4 text-xs font-semibold tracking-wider text-pink-500 uppercase rounded-full">
              Brand new
            </p>
            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Bloom Your Lips
              <br className="hidden md:block" />
              With Our{" "}
              <span className="inline-block text-deep-purple-accent-400">
                Bloom Lips..
              </span>
            </h2>
            <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
              Pucker up for long-lasting lipstick colors! Discover our iconic
              Mega Last Lip Color for sophisticated syle or Catsuit liquid
              lipstick for precise edges. Our silky lipsticks range from subtle
              nudes to glossy metallics. Buildable, beautiful, and always
              cruelty-free!
            </p>
            <div className="flex items-center">
              <button
                href="/"
                className="inline-flex items-center justify-center py-2 px-3 mr-6 font-semibold tracking-wide text-white transition duration-200 rounded bg-pink-600 focus:shadow-outline focus:outline-none border border-pink-600"
                style={{ boxShadow: "0 4px 14px 2px rgb(255, 192, 203,0.8)" }}
              >
                Get started
              </button>
              <button
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold text-pink-600 transition-colors duration-200 border py-2 px-3 border-pink-600 rounded hover:bg-pink-600 hover:text-white shadow-lg"
              >
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
