// Cart.js
import React, { useState } from "react";
import CartItem from "../components/CartItem";
import CheckoutSummary from "../components/CheckoutSummary";
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

const calculateDiscountPrice = (price, discountPercent) => {
  return price - (price * discountPercent) / 100;
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
      <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Shopping Cart
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cart Items Section */}
          <div className="lg:col-span-2">
            {cartItems.map((product) => (
              <CartItem
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
