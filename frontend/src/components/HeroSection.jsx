import React from "react";
import hero from "../images/hero-1.png";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="flex items-center relative  mx-8 my-6  bg-gray-100 rounded-xl">
      <div>
        <img alt="product" className="rounded-xl " src={hero} />
      </div>
      <div className="absolute px-10 flex justify-between ">
        <div className="text-black">
          <p className="text-7xl font-bold">Explore The </p>
          <p className="text-7xl font-bold">Ultimate Collection</p>
          <button className="mt-8 text-2xl font-bold border px-3 py-1 border-black rounded-lg hover:text-white hover:bg-black">
            <Link to="/explore"> Shop Now</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
