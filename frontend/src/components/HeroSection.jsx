import React from "react";

const HeroSection = () => {
  return (
    <div className="flex relative justify-center mx-8 my-6  bg-gray-200 rounded-lg">
      <div>
        <img
          alt="product"
          className="rounded-lg opacity-10"
          src={
            "https://images.macrumors.com/article-new/2024/09/iphone-16-design.jpg"
          }
        />
      </div>
      <div className="absolute right-0 bottom-0 ">
        {/* <img
          alt="product"
          className="h-20"
          src={
            "https://images.macrumors.com/article-new/2024/09/iphone-16-design.jpg"
          } */}
        {/* /> */}
      </div>
    </div>
  );
};

export default HeroSection;
