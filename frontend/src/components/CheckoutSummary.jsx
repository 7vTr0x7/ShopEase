import React from "react";

const calculateDiscountPrice = (price, discountPercent) => {
  return price - (price * discountPercent) / 100;
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

export default CheckoutSummary;
