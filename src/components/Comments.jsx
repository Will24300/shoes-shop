import React, { useState } from "react";
import { FaRegComments } from "react-icons/fa";
import { Testimonials } from "./shoes/Testimonials";
import leftArrow from "../img/leftArrow.png";
import rightArrow from "../img/rightArrow.png";

function Comments() {
  const [index, setIndex] = useState(0);

  const handleIncrease = () => {
    setIndex((prev) => (prev >= Testimonials.length - 1 ? 0 : prev + 1));
  };

  const handleDecrease = () => {
    setIndex((prev) => (prev <= 0 ? Testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="px-4 mb-20">
      <h1 className="text-center text-4xl font-bold mb-10">Testimonials</h1>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 bg-gray-100 rounded-lg p-6 md:p-10">
        {/* Left Icon */}
        <div className="w-full md:w-1/2 flex justify-center items-center mb-6 md:mb-0">
          <FaRegComments className="text-7xl text-gray-500" />
        </div>

        {/* Right Card */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="bg-white w-full rounded-2xl p-6 md:p-10 flex flex-col items-center relative shadow-md">
            <h2 className="mb-6 text-2xl font-bold text-gray-700 text-center">
              What Our Clients Say
            </h2>

            <div className="w-28 h-28 mb-4">
              <img
                src={Testimonials[index].img}
                alt={Testimonials[index].name}
                className="rounded-full w-full h-full object-cover"
              />
            </div>

            <h3 className="font-bold text-lg">{Testimonials[index].name}</h3>
            <p className="text-sm text-gray-500">
              {Testimonials[index].country}
            </p>

            {/* Arrows */}
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <img
                src={leftArrow}
                alt="Previous"
                className="cursor-pointer w-8 h-8"
                onClick={handleDecrease}
              />
            </div>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <img
                src={rightArrow}
                alt="Next"
                className="cursor-pointer w-8 h-8"
                onClick={handleIncrease}
              />
            </div>

            <span className="text-yellow-500 my-3">
              {Testimonials[index].stars}
            </span>
            <p className="text-center text-gray-600 px-4">
              {Testimonials[index].comment}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Comments;
