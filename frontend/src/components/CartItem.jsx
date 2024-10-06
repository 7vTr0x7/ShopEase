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
    <div className="flex items-center bg-white rounded-lg shadow-md p-4 mb-4">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-32 h-32 object-cover rounded-md border border-gray-300"
      />
      <div className="flex-1 lg:ml-4 ml-3">
        <h2 className="text-xl font-bold text-gray-800 hover:text-indigo-600 transition-colors">
          {product.name}
        </h2>
        <p className="text-gray-600">{product.categories.subCategory}</p>
        <p className="text-gray-500 mt-1">{product.description}</p>
        <p className="text-gray-800 font-bold mt-2">
          ${discountedPrice.toFixed(2)}{" "}
          <span className="line-through text-gray-400">
            ${product.price.toFixed(2)}
          </span>
        </p>
      </div>
      <div className="flex items-center space-x-2 ml-4">
        <button
          className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-300 transition-colors"
          onClick={() => onQuantityChange(product._id, "decrease")}>
          -
        </button>
        <span className="text-lg font-semibold">{product.quantity}</span>
        <button
          className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-300 transition-colors"
          onClick={() => onQuantityChange(product._id, "increase")}>
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
