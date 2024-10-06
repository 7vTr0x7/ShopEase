import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineStar } from "react-icons/md";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ prod }) => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);

  const addToCartHandler = async () => {
    ///
    try {
      const res = await fetch(
        `http://localhost:4000/api/users/cart/product/${prod._id}`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ userId: user._id }),
        }
      );
      if (!res.ok) {
        console.log("Failed");
        return;
      }

      const data = await res.json();
      console.log(data);
      if (data.message) {
        toast.success("Added to Cart");
      }
    } catch (error) {
      console.log(`Failed to login ${error}`);
    }
  };

  return (
    <div className="flex items-center bg-white flex-col rounded-lg justify-between p-4 shadow-lg transition-all duration-200 hover:shadow-xl">
      <div
        className="cursor-pointer w-full"
        onClick={() => navigate(`/product/${prod._id}`)}>
        <img
          className="w-full h-48 object-cover rounded-lg transition-transform duration-200 hover:scale-105"
          src={prod.imageUrl}
          alt={prod.name}
        />
        <p className="mt-3 text-lg font-semibold text-gray-800 hover:text-gray-900">
          {prod.name}
        </p>
        <div className="text-sm flex items-center gap-1 mt-2">
          <span className="font-bold">{prod.rating.toFixed(1)}</span>
          <MdOutlineStar className="text-yellow-400" />
          <span className="text-gray-500">({prod.reviews} reviews)</span>
        </div>
        <p className="mt-3 text-lg">
          <span className="line-through text-gray-500">${prod.price}</span>
          <span className="ml-3 text-green-600 font-bold">
            $
            {(prod.price - (prod.price * prod.discountPercent) / 100).toFixed(
              2
            )}
          </span>
        </p>
      </div>
      <div className="mt-4 grid grid-cols-4 gap-2 w-full">
        {user?.cart?.includes(prod._id) ? (
          <button
            onClick={() => navigate("/cart")}
            className="col-span-3 px-4 py-2 text-white bg-black hover:text-black hover:bg-gray-200 rounded-lg font-semibold transition-all duration-200">
            Go To Cart
          </button>
        ) : (
          <button
            onClick={addToCartHandler}
            className="col-span-3 px-4 py-2 text-white bg-black hover:text-black hover:bg-gray-200 rounded-lg font-semibold transition-all duration-200">
            Add To Cart
          </button>
        )}
        <span className="col-span-1 flex justify-center items-center bg-gray-200 hover:bg-gray-300 rounded-lg transition-all duration-200 cursor-pointer">
          <FaRegHeart className="text-black text-2xl" />
        </span>
      </div>
      <Toaster />
    </div>
  );
};

export default ProductCard;
