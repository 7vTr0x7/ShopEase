import React from "react";
import Header from "../components/Header";

const products = [
  {
    name: "Apple iPhone 14 Pro Max",
    imageUrl: "https://picsum.photos/id/1012/200/200",
    price: 1199,
    discountPercent: 10,
    rating: 4.8,
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
    categories: {
      category: "Electronics",
      subCategory: "Televisions",
    },
    availability: true,
    description:
      "Samsung's 65-inch QLED 4K TV with Quantum HDR and 120Hz refresh rate for an immersive viewing experience.",
  },
  {
    name: "Sony WH-1000XM5 Wireless Headphones",
    imageUrl: "https://picsum.photos/id/1012/200/200",
    price: 399,
    discountPercent: 5,
    rating: 4.6,
    categories: {
      category: "Electronics",
      subCategory: "Headphones",
    },
    availability: true,
    description:
      "Industry-leading noise-cancelling headphones with up to 30 hours of battery life and touch sensor controls.",
  },
];

const Explore = () => {
  return (
    <>
      <Header />
      <main className="flex my-5  h-36">
        <div className="w-3/12 bg-gray-300"></div>
        <div className="w-9/12 px-10">
          <div className="flex gap-14 ">
            {products.map((prod) => (
              <div className="w-4/12 " key={prod.imageUrl}>
                <div className=" rounded-lg   shadow-xl ">
                  <div className="flex bg-white rounded-lg justify-center py-6 px-1">
                    <img className=" rounded-lg" src={prod.imageUrl} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Explore;
