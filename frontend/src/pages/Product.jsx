import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { MdOutlineStar } from "react-icons/md";

const Product = () => {
  const [products, setProducts] = useState([]);
  const params = useParams();
  const prodId = params.prodId;

  const product = products.find((prod) => prod._id === prodId);

  const fetchProducts = async () => {
    try {
      const res = await fetch(
        `https://shopease-backend.vercel.app/api/users//products/categories/user`,
        {
          credentials: "include",
        }
      );
      if (!res.ok) {
        console.log("Failed");
        return;
      }

      const data = await res.json();
      setProducts(data.products);
    } catch (error) {
      console.log(`Failed to login ${error}`);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Header />
      <main className="flex justify-center mt-10 w-full h-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-10/12 p-5 bg-white rounded-md">
          <div className="flex justify-center">
            <img
              className="rounded-lg h-80 w-80 object-cover"
              src={product?.imageUrl}
              alt={product?.name}
            />
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-3xl font-bold text-gray-800">
                {product?.name}
              </p>
              <div className="flex items-center gap-1 mt-2">
                <span className="text-lg font-semibold">{product?.rating}</span>
                <MdOutlineStar className="text-yellow-400 text-xl" />
                <span className="text-gray-500 text-sm">
                  ({product?.reviews} reviews)
                </span>
              </div>
              <p className="mt-3 text-xl">
                <span className="line-through text-gray-400">
                  ${product?.price}
                </span>
                <span className="ml-4 text-2xl font-bold text-green-600">
                  $
                  {(
                    product?.price -
                    (product?.price * product?.discountPercent) / 100
                  ).toFixed(2)}
                </span>
              </p>
              <p className="mt-4 text-gray-700">
                <span className="font-bold text-lg">Description: </span>
                {product?.description}
              </p>
              <p className="mt-3 text-sm text-gray-500">
                <span className="font-semibold">Category: </span>
                {product?.categories.category} -{" "}
                {product?.categories.subCategory}
              </p>
              <p
                className={`mt-3 text-lg font-semibold ${
                  product?.availability ? "text-green-600" : "text-red-600"
                }`}>
                {product?.availability ? "In Stock" : "Out of Stock"}
              </p>
            </div>
            <div className="flex gap-4 mt-5  ">
              <button className="bg-gray-950 uppercase text-xl font-bold hover:text-black  text-white py-2 px-4 rounded-md hover:bg-gray-300 transition duration-300">
                Add To Cart
              </button>
              <button className="bg-gray-400 uppercase text-xl font-bold text-white py-2 px-4 rounded-md hover:bg-gray-600 transition duration-300">
                Add to Whishlist
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Product;
