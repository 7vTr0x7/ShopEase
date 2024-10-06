import React, { useState } from "react";
import Header from "../components/Header";

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <>
      <Header />
      <div className="flex items-center justify-center mt-10 ">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-xl">
          <h2 className="text-2xl font-bold text-center mb-6">
            {isLogin ? "Login" : "Sign Up"}
          </h2>
          <form>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none "
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none "
                required
              />
            </div>
            {!isLogin && (
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none "
                  required
                />
              </div>
            )}
            <button
              type="submit"
              className="w-full px-4 py-2 mt-4 text-white bg-gray-900 rounded-md hover:bg-gray-700 focus:outline-none ">
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </form>
          <p className="mt-4 text-sm text-center text-gray-600">
            {isLogin ? (
              <>
                Don’t have an account?{" "}
                <button
                  onClick={toggleForm}
                  className="text-black hover:underline">
                  Sign Up
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button
                  onClick={toggleForm}
                  className="text-black  hover:underline">
                  Login
                </button>
              </>
            )}
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginSignup;
