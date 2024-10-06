// Cart.js
import React, { useEffect, useState } from "react";
import CartItem from "../components/CartItem";
import CheckoutSummary from "../components/CheckoutSummary";
import Header from "../components/Header";
import { useSelector } from "react-redux";

const calculateDiscountPrice = (price, discountPercent) => {
  return price - (price * discountPercent) / 100;
};

const Cart = () => {
  const [products, setProducts] = useState([]);

  const [cartItems, setCartItems] = useState(
    products.map((product) => ({ ...product, quantity: 1 }))
  );

  const user = useSelector((state) => state.user.user);

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

  const fetchCart = async () => {
    try {
      const res = await fetch(
        `http://localhost:4000/api/users/products/user/cart/products/${user._id}`,
        {
          credentials: "include",
        }
      );
      if (!res.ok) {
        console.log("Failed");
        return;
      }

      const data = await res.json();

      setProducts(data.cart);
    } catch (error) {
      console.log(`Failed to login ${error}`);
    }
  };
  useEffect(() => {
    fetchCart();
  }, []);
  console.log(products);
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
