import React from "react";
import logo from "../images/logo.png";
import { MdOutlineShoppingCart } from "react-icons/md";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-gray-100 py-3 px-6">
      <div className="flex justify-between">
        <div className="flex items-center">
          <img alt="logo" src={logo} className="h-14" />
          <p className="text-purple-400 text-xl font-bold cursor-pointer hover:text-purple-500">
            ShopEase
          </p>
        </div>
        <div className="flex  items-center w-[400px]">
          <input
            type="text"
            placeholder="Search"
            className="py-1 mx-3 px-3 focus:outline-none rounded-lg  w-full"
          />
        </div>
        <div className="flex justify-between gap-8 items-center  ">
          <p className=" text-3xl text-purple-400  font-bold cursor-pointer hover:text-purple-500">
            <HiOutlineShoppingBag />
          </p>

          <p className="text-2xl text-purple-400  font-bold cursor-pointer hover:text-purple-500">
            <FaRegHeart />
          </p>
          <p className="text-3xl text-purple-400  font-bold cursor-pointer hover:text-purple-500">
            <MdOutlineShoppingCart />
          </p>
          <p className="text-3xl text-purple-400  font-bold cursor-pointer hover:text-purple-500">
            <CgProfile />
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
