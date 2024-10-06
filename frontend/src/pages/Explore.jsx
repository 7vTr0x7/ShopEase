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
  const itemsPerPage = 6; // Dynamically handle how many items per page
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const increasePageHandler = () => {
    if (page < totalPages) {
      setPage((prev) => prev + 1);
    }
  };

  const decreasePageHandler = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  return (
    <>
      <Header />
      <main className="flex my-5 mb-10 justify-center">
        <div className="w-3/12 bg-gray-100 p-4 shadow-md rounded-lg">
          <FilterSection />
        </div>
        <div className="w-9/12 px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
            {products
              .slice((page - 1) * itemsPerPage, page * itemsPerPage)
              .map((prod) => (
                <div className="w-full" key={prod._id}>
                  <ProductCard prod={prod} />
                </div>
              ))}
          </div>
          {products && products.length > 0 ? (
            <div className="flex justify-center mt-6 text-xl font-bold">
              <button
                className="px-4 py-2 bg-white shadow-md hover:bg-gray-100 rounded-xl transition-all duration-200 ease-in-out"
                onClick={decreasePageHandler}
                disabled={page === 1}>
                Previous
              </button>
              <p className="px-4 mx-4 py-2 bg-white shadow-md rounded-xl ">
                {page} of {totalPages}
              </p>
              <button
                className="px-4 py-2 bg-white shadow-md hover:bg-gray-100 rounded-xl transition-all duration-200 ease-in-out"
                onClick={increasePageHandler}
                disabled={page === totalPages}>
                Next
              </button>
            </div>
          ) : (
            <p className="text-center text-gray-500">No products available.</p>
          )}
        </div>
      </main>
    </>
  );
};

export default Explore;
