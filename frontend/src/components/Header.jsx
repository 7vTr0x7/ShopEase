import React, { useState } from "react";
import logo from "../images/logo.png";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white py-3 px-6">
      <div className="flex justify-between">
        <div className="flex items-center">
          <img alt="logo" src={logo} className="h-14" />
          <p className="text-black text-xl font-bold cursor-pointer hover:text-gray-500">
            <Link to="/">ShopEase</Link>
          </p>
        </div>
        <div className="flex  gap-10 items-center  text-lg text-black">
          <div
            className={
              "flex items-center  px-3 rounded-3xl  border-gray-200 border-2 text-black bg-white"
            }>
            <input
              type="text"
              placeholder="Search"
              className={"py-1 px-3  focus:outline-none rounded-lg   w-full"}
            />
            <IoSearch className={"text-black text-2xl"} />
          </div>
          <p className="  font-bold cursor-pointer hover:text-gray-400">
            <Link to="/explore">Explore</Link>
          </p>

          <p className=" font-bold cursor-pointer hover:text-gray-400">
            <Link to="/wishlist">Wishlist</Link>
          </p>
          <p className=" font-bold cursor-pointer hover:text-gray-400">
            {" "}
            <Link to="/cart">Cart</Link>
          </p>
          <p className=" font-bold cursor-pointer hover:text-gray-400">Login</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
