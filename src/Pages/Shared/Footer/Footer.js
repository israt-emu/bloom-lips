import React from "react";
import logo from "../../../images/logo.png";

const Footer = () => {
  return (
    <div>
      <div className="relative mt-16 bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600">
        <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
            <div className="md:max-w-md lg:col-span-2">
              <a
                href="/"
                aria-label="Go home"
                className="inline-flex items-center"
              >
                <img src={logo} className="w-12" alt="" />
                <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                  Bloom Lips.
                </span>
              </a>
              <div className="mt-4 lg:max-w-sm">
                <input
                  type="email"
                  className="py-2 px-3 rounded focus:outline-none shadow-lg"
                />
                <br />
                <button className="px-3 py-2 bg-white shadow-xl text-pink-600 mt-2 rounded">
                  Subscribe us
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
              <div>
                <p className="font-semibold tracking-wide text-teal-accent-400">
                  Category
                </p>
                <ul className="mt-2 space-y-2">
                  <li>Red</li>
                  <li>Catsuite</li>
                  <li>Liquid Matte</li>
                  <li>Pencil Matte</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold tracking-wide text-teal-accent-400">
                  About
                </p>
                <ul className="mt-2 space-y-2">
                  <li>Blog</li>
                  <li>Products</li>
                  <li>FAQ</li>
                  <li>About Bloom Lips</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold tracking-wide text-teal-accent-400">
                  Customer Service
                </p>
                <ul className="mt-2 space-y-2">
                  <li>Contact Us</li>
                  <li>Shipping & Returns</li>
                  <li>Virtual Beauty Consultations</li>
                  <li>Help</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row">
            <p className="text-sm text-gray-100">
              © Copyright 2020 Bloom Lips. All rights reserved.
            </p>
            <div className="flex items-center mt-4 space-x-4 sm:mt-0 text-white text-lg">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-pinterest"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
