import React, { useEffect, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import SingleSlide from "../SingleSlide/SingleSlide";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  //getting reviews
  useEffect(() => {
    fetch("https://blooming-brushlands-04717.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="lg:w-4/5 w-11/12 mx-auto py-12">
      <h1 className="mb-6 text-xl text-center">Testimonial</h1>
      <h1 className="mb-8 text-3xl text-center font-semibold">
        What our customers are saying about us
      </h1>
      <div className="bg-pink-100">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <SingleSlide review={review}></SingleSlide>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
