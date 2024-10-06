import React, { useState } from "react";
import Header from "../components/Header";

import ProductCard from "../components/ProductCard";
import FilterSection from "../components/FilterSection";

const products = [
  {
    _id: "1",
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
];

const Explore = () => {
  const [page, setPage] = useState(1);

  const increasePageHandler = () => {
    if (page < products.length / 6) {
      setPage((prev) => prev + 1);
    }
  };

  const decreasePageHandler = () => {
    if (page >= Math.floor(products.length / 6) && page > 1) {
      console.log(Math.floor(products.length / 6));
      setPage((prev) => prev - 1);
    }
  };

  return (
    <>
      <Header />
      <main className="flex my-5 mb-10">
        <div className="w-3/12">
          <FilterSection />
        </div>
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
            <div className="flex justify-center mt-6 text-xl font-bold">
              <button
                className="px-4 py-2 bg-white shadow-md rounded-xl "
                onClick={decreasePageHandler}>
                -
              </button>
              <p className="px-4 mx-4 py-2 bg-white shadow-md rounded-xl ">
                {page}
              </p>
              <button
                className="px-4 py-2 bg-white shadow-md rounded-xl "
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
