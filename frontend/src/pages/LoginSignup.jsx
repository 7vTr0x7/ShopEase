import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { addUser } from "../redux/slices/userSlice";
import { login, register } from "../utils/constants";

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loggedUser = useSelector((state) => state.user.user);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const getUser = async () => {
    try {
      const res = await fetch(
        `https://shopease-backend.vercel.app/api/users/user`,
        {
          credentials: "include",
        }
      );
      if (!res.ok) {
        console.log("Failed");
      }

      const data = await res.json();

      if (data.user) {
        dispatch(addUser(data.user));
        if (loggedUser.email) {
          navigate("/");
        }
      }
    } catch (error) {
      console.log(`Failed to login ${error}`);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (isLogin) {
      const data = {
        email,
        password,
      };
      await login(data);
      await getUser();
    } else {
      const data = {
        name,
        email,
        password,
      };

      await register(data);
      await getUser();
    }
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
            {!isLogin && (
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none "
                  required
                />
              </div>
            )}
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none "
                required
              />
            </div>

            <button
              type="submit"
              onClick={submitHandler}
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
      <Toaster />
    </>
  );
};

export default LoginSignup;
