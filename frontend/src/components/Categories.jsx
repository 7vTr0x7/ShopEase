import React, { useEffect, useState } from "react";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const res = await fetch(
        `http://localhost:4000/api/users/user/categories`,
        {
          credentials: "include",
        }
      );
      if (!res.ok) {
        console.log("Failed");
        return;
      }

      const data = await res.json();
      setCategories(data.categories);
    } catch (error) {
      console.log(`Failed to login ${error}`);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="my-6">
      <p className="px-20 font-semibold text-lg">Categories</p>
      <div className=" px-20  flex flex-wrap gap-1 justify-between">
        {categories.map((cat) => (
          <div
            key={cat._id}
            className="flex p-3 rounded-lg shadow-xl bg-gray-100  mt-6 flex-col items-center justify-center  ">
            <img
              className="rounded-lg w-9/12"
              alt={cat.category}
              src={cat.imageUrl}
            />
            <p className="w-full text-md mt-4 bg-white shadow-lg py-2 rounded-lg font-semibold text-center">
              {cat.category}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
