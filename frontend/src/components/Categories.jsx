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
    categoryImageUrl: "https://picsum.photos/id/1012/200/200",
    name: "Beauty ",
  },
  {
    categoryImageUrl: "https://picsum.photos/id/1016/200/200",
    name: "Sports",
  },
];

const Categories = () => {
  return (
    <div className="my-8 px-28 flex  justify-between items-center flex-wrap w-full">
      {categories.map((cat) => (
        <div className=" bg-gray-100 mt-6 rounded-lg " key={cat.name}>
          <div className="flex   py-10  px-16 flex-col justify-between ">
            <img className="" alt={cat.name} src={cat.categoryImageUrl} />
            <p className="text-md mt-4 bg-white shadow-lg py-2 rounded-lg font-semibold text-center">
              {cat.name}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
