import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineStar } from "react-icons/md";

const ProductCard = ({ prod }) => {
  return (
    <div className="flex items-center  bg-white flex-col rounded-lg justify-between py-3 px-1">
      <div>
        <img className=" rounded-lg" src={prod.imageUrl} />
        <p className="mt-3 text-lg font-semibold">
          {prod.name.length > 16 && prod.name.slice(0, 16)}...
        </p>
        <div className="text-sm flex items-center gap-1">
          <span> {prod.rating}</span>
          <span>
            <MdOutlineStar className="text-yellow-400" />
          </span>
          <span className="text-sm">({prod.reviews}) reviews</span>
        </div>
        <p className="mt-3 ">
          <span className="line-through">${prod.price}</span>
          <span className="mx-3 font-semibold">
            $
            {(prod.price - (prod.price * prod.discountPercent) / 100).toFixed(
              2
            )}
          </span>
        </p>
      </div>
      <div className="mt-4 grid grid-cols-4 gap-2 ">
        <button className="px-3 py-2 text-white hover:bg-gray-600 col-span-3 bg-gray-400 rounded-lg text-xl font-bold">
          Add To Cart
        </button>
        <span className="  flex justify-center items-center text-white col-span-1 hover:bg-gray-600  bg-gray-400  rounded-lg font-bold">
          <FaRegHeart className="text-2xl w-full " />
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
