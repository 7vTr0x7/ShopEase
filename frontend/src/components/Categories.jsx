import React from "react";

const categories = [
  {
    categoryImageUrl: "https://picsum.photos/id/1011/200/200",
    name: "Electronics",
  },
  {
    categoryImageUrl: "https://picsum.photos/id/1005/200/200",
    name: "Fashion",
  },
  {
    categoryImageUrl: "https://picsum.photos/id/1018/200/200",
    name: "Home Decor",
  },
  {
    categoryImageUrl: "https://picsum.photos/id/1025/200/200",
    name: "Books",
  },

  {
    categoryImageUrl: "https://picsum.photos/id/1016/200/200",
    name: "Sports",
  },
];

const Categories = () => {
  return (
    <div className="my-6">
      <p className="px-20 font-semibold text-lg">Categories</p>
      <div className=" px-20  flex flex-wrap gap-1 justify-between">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="flex p-3 rounded-lg shadow-xl bg-gray-100  mt-6 flex-col items-center justify-center  ">
            <img
              className="rounded-lg w-9/12"
              alt={cat.name}
              src={cat.categoryImageUrl}
            />
            <p className="w-full text-md mt-4 bg-white shadow-lg py-2 rounded-lg font-semibold text-center">
              {cat.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
