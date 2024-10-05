import React from "react";
import logo from "../images/logo.png";

const Header = () => {
  return (
    <header className="bg-purple-100 py-3 px-6">
      <div className="flex justify-between">
        <div className="flex items-center">
          <img alt="logo" src={logo} className="h-14" />
          <p className="text-purple-400 text-xl font-bold cursor-pointer hover:text-purple-500">
            ShopEase
          </p>
        </div>
        <div className="flex justify-end mx-7  items-center w-full">
          <input
            type="text"
            placeholder="Search"
            className="py-1 px-3 focus:outline-none rounded-lg  w-3/12"
          />
        </div>
        <div className="flex  gap-10 items-center  text-lg text-purple-500">
          <p className="  font-bold cursor-pointer hover:text-purple-400">
            Explore
          </p>

          <p className=" font-bold cursor-pointer hover:text-purple-400">
            Wishlist
          </p>
          <p className=" font-bold cursor-pointer hover:text-purple-400">
            Cart
          </p>
          <p className=" font-bold cursor-pointer hover:text-purple-400">
            Login
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
