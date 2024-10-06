import React from "react";
import { Link } from "react-router-dom";

const calculateDiscountPrice = (price, discountPercent) => {
  return price - (price * discountPercent) / 100;
};

const CheckoutSummary = ({ cartItems, calculateTotal }) => {
  const total = calculateTotal();
  const discount = cartItems.reduce(
    (acc, item) =>
      acc +
      (item.product.price -
        calculateDiscountPrice(
          item.product.price,
          item.product.discountPercent
        )) *
        item.product.quantity,
    0
  );

  const deliveryCharge = 5.99; // Example delivery charge, adjust as needed

  return (
    <>
      {cartItems.length > 0 && (
        <div className="bg-white rounded-lg shadow-md p-4">
          <p className="font-bold text-xl mb-4">Price Details</p>
          <hr />
          <div className="flex justify-between">
            <span className="text-lg font-semibold">
              Price (
              {`${cartItems.length} ${cartItems.length > 1 ? "Items" : "item"}`}
              )
            </span>
            <span className="text-lg font-semibold">${total.toFixed(2)}</span>
          </div>

          {discount > 0 && (
            <div className="flex justify-between my-2">
              <span className="text-lg font-semibold">Discount</span>
              <span className="text-lg font-semibold">
                ${discount.toFixed(2)}
              </span>
            </div>
          )}

          <div className="flex justify-between mb-2">
            <span className="text-lg font-semibold">Delivery Charges</span>
            <span className="text-lg font-semibold">
              ${deliveryCharge.toFixed(2)}
            </span>
          </div>

          <hr />

          <div className="flex justify-between mb-1">
            <span className="font-bold text-lg">Total Amount</span>
            <span className="text-lg font-semibold">
              ${(total + deliveryCharge).toFixed(2)}
            </span>
          </div>
          <hr />

          <p className="text-lg font-semibold">
            You Will Save ${discount.toFixed(2)} on This Order
          </p>

          <button className="btn bg-gray-900 text-white fw-bold w-full rounded-lg py-2 hover:bg-gray-600 transition-colors mt-4">
            <Link
              to="/checkout"
              className="nav-link"
              state={{
                cartItems,
                total,
                discount,
                deliveryCharge,
              }}>
              Place Order
            </Link>
          </button>
        </div>
      )}
    </>
  );
};

export default CheckoutSummary;
