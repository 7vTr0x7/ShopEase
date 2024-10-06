import React from "react";
import ProductCard from "../components/ProductCard";
import Header from "../components/Header";
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

const Wishlist = () => {
  return (
    <>
      <Header />
      <div>
        <h1 className="text-3xl text-center font-bold mb-6">WISHLIST</h1>

        <div className="flex gap-3 justify-center mt-10">
          {products.map((prod) => (
            <div className="" key={prod._id}>
              <ProductCard prod={prod} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Wishlist;
