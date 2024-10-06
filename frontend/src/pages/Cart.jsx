import React, { useState } from "react";
import Header from "../components/Header";

// Sample product data
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

// Function to calculate discounted price

// Product Component
const ProductItem = ({ product, onQuantityChange }) => {
  const discountedPrice = calculateDiscountPrice(
    product.price,
    product.discountPercent
  );

  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between bg-white rounded-lg shadow-md p-4 mb-4 transition-transform transform hover:shadow-lg">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-32 h-32 object-cover rounded-lg"
      />
      <div className="lg:ml-4 flex-1">
        <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
        <p className="text-gray-600">{product.categories.subCategory}</p>
        <p className="text-gray-600 mt-1">{product.description}</p>
        <p className="text-gray-800 font-bold mt-2">
          ${discountedPrice.toFixed(2)}{" "}
          <span className="line-through text-gray-400">
            ${product.price.toFixed(2)}
          </span>
        </p>
      </div>
      {/* Quantity Management */}
      <div className="flex items-center mt-4 lg:mt-0">
        <button
          className="px-2 py-1 bg-gray-300 rounded-md hover:bg-gray-400 transition-colors"
          onClick={() => onQuantityChange(product._id, "decrease")}>
          -
        </button>
        <span className="px-4 text-lg">{product.quantity}</span>
        <button
          className="px-2 py-1 bg-gray-300 rounded-md hover:bg-gray-400 transition-colors"
          onClick={() => onQuantityChange(product._id, "increase")}>
          +
        </button>
      </div>
    </div>
  );
};

const CheckoutSummary = ({ cartItems, calculateTotal }) => {
  const total = calculateTotal();
  const discount = cartItems.reduce(
    (acc, item) =>
      acc +
      (item.price - calculateDiscountPrice(item.price, item.discountPercent)) *
        item.quantity,
    0
  );

  return (
    <div className="border rounded-lg p-6 bg-white shadow-sm">
      <h2 className="text-2xl font-semibold mb-4">Summary</h2>
      <div className="flex justify-between mb-2">
        <span>Subtotal</span>
        <span>${total.toFixed(2)}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Discount</span>
        <span>${discount.toFixed(2)}</span>
      </div>
      <div className="flex justify-between font-bold text-lg mb-4">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>
      <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors">
        Proceed to Checkout
      </button>
    </div>
  );
};

const Cart = () => {
  const [cartItems, setCartItems] = useState(
    products.map((product) => ({ ...product, quantity: 1 }))
  );

  const handleQuantityChange = (productId, action) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item._id === productId
          ? {
              ...item,
              quantity:
                action === "increase"
                  ? item.quantity + 1
                  : Math.max(1, item.quantity - 1),
            }
          : item
      )
    );
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (acc, item) =>
        acc +
        calculateDiscountPrice(item.price, item.discountPercent) *
          item.quantity,
      0
    );
  };

  return (
    <>
      <Header />
      <div className="container mx-auto p-6 bg-gray-50 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-center mb-8">Shopping Cart</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cart Items Section */}
          <div className="lg:col-span-2">
            {cartItems.map((product) => (
              <ProductItem
                key={product._id}
                product={product}
                onQuantityChange={handleQuantityChange}
              />
            ))}
          </div>

          {/* Summary Section */}
          <CheckoutSummary
            cartItems={cartItems}
            calculateTotal={calculateTotal}
          />
        </div>
      </div>
    </>
  );
};

export default Cart;
