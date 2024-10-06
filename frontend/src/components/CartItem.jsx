import React from "react";

const calculateDiscountPrice = (price, discountPercent) => {
  return price - (price * discountPercent) / 100;
};

const CartItem = ({ product, onQuantityChange }) => {
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

export default CartItem;
