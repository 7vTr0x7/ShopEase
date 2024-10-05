import React from "react";

const HeroSection = () => {
  return (
    <div className="flex items-center relative  mx-8 my-6  bg-gray-200 rounded-lg">
      <div>
        <img
          alt="product"
          className="rounded-lg opacity-10"
          src={
            "https://images.macrumors.com/article-new/2024/09/iphone-16-design.jpg"
          }
        />
      </div>
      <div className="absolute px-10 flex justify-between ">
        <div className="text-purple-500">
          <p className="text-7xl font-bold">Explore The </p>
          <p className="text-7xl font-bold">Ultimate Collection</p>
          <button className="mt-8 text-2xl font-bold border px-3 py-1 border-purple-400 rounded-lg hover:text-white hover:bg-purple-500">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
