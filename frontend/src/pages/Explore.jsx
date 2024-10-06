import React, { useState } from "react";
import Header from "../components/Header";

import { MdOutlineStar } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import ProductCard from "../components/ProductCard";

const products = [
  {
    name: "Apple iPhone 14 Pro Max",
    imageUrl: "https://picsum.photos/id/1012/200/200",
    price: 1199,
    discountPercent: 10,
    rating: 4.8,
    reviews: 400,
    categories: {
      category: "Electronics",
      subCategory: "Smartphones",
    },
    availability: true,
    description:
      "The latest iPhone 14 Pro Max with advanced features, including A16 Bionic chip, 48MP camera system, and ProMotion display.",
  },
  {
    name: "Samsung 65-Inch QLED 4K TV",
    imageUrl: "https://picsum.photos/id/1012/200/200",
    price: 1299,
    discountPercent: 15,
    rating: 4.7,
    reviews: 400,
    categories: {
      category: "Electronics",
      subCategory: "Televisions",
    },
    availability: true,
    description:
      "Samsung's 65-inch QLED 4K TV with Quantum HDR and 120Hz refresh rate for an immersive viewing experience.",
  },
  {
    name: "Samsung 65-Inch QLED 4K TV",
    imageUrl: "https://picsum.photos/id/1012/200/200",
    price: 1299,
    discountPercent: 15,
    rating: 4.7,
    reviews: 400,
    categories: {
      category: "Electronics",
      subCategory: "Televisions",
    },
    availability: true,
    description:
      "Samsung's 65-inch QLED 4K TV with Quantum HDR and 120Hz refresh rate for an immersive viewing experience.",
  },
];

const Explore = () => {
  const [page, setPage] = useState(1);

  const increasePageHandler = () => {
    if (page < products.length / 6) {
      setPage((prev) => prev + 1);
    }
  };

  const decreasePageHandler = () => {
    if (page >= products.length / 6 && page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  return (
    <>
      <Header />
      <main className="flex my-5  h-36">
        <div className="w-3/12 bg-gray-300"></div>
        <div className="w-9/12 px-10">
          <div className="grid grid-cols-3 place-items-center">
            {products.slice(page * 6 - 6, page * 6).map((prod) => (
              <div
                className="w-9/12 p-4  shadow-xl rounded-lg"
                key={prod.imageUrl}>
                <ProductCard prod={prod} />
              </div>
            ))}
          </div>
          {products && products.length > 0 && (
            <div className="flex justify-center mt-6">
              <button
                className="px-4 py-2 bg-white shadow-md rounded-xl text-xl font-semibold"
                onClick={decreasePageHandler}>
                -
              </button>
              <p className="px-4 mx-4 py-2 bg-white shadow-md rounded-xl text-xl font-semibold">
                {page}
              </p>
              <button
                className="px-4 py-2 bg-white shadow-md rounded-xl text-xl font-semibold"
                onClick={increasePageHandler}>
                +
              </button>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Explore;
