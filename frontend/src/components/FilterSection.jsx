import React, { useEffect, useState } from "react";

const FilterSection = ({ products }) => {
  const categories =
    products && products.map((prod) => prod.categories.subCategory);

  const filterSubCategories = () => {
    const filtered = [];
    if (categories && categories.length > 0) {
      categories.forEach((cat) => {
        if (!filtered.includes(cat)) {
          filtered.push(cat);
        }
      });
    }

    return filtered;
  };

  const filteredSubCategories = filterSubCategories();

  return (
    <div className="px-8 ">
      <div className="flex justify-between items-center">
        <p className="text-3xl font-bold">Filters</p>
        <button className="border text-lg rounded-2xl border-gray-400 px-4 ">
          Reset
        </button>
      </div>
      <div className="border rounded-xl py-4 px-6 mt-6 border-gray-400">
        <p className="text-xl font-bold">Price</p>
        <div className="flex justify-between mt-2">
          <label htmlFor="below200">Below $200</label>
          <input type="checkbox" id="below200" />
        </div>
        <div className="flex justify-between mt-2">
          <label htmlFor="201To999">$201 - $999</label>
          <input type="checkbox" id="201To999" />
        </div>
        <div className="flex justify-between mt-2">
          <label htmlFor="1000To1999">$1000 - $1999</label>
          <input type="checkbox" id="1000To1999" />
        </div>
        <div className="flex justify-between mt-2">
          <label htmlFor="over2000">Over $2000</label>
          <input type="checkbox" id="over2000" />
        </div>
      </div>
      <div className="border rounded-xl py-4 px-6 mt-6 border-gray-400">
        <p className="text-xl font-bold">Rating (min)</p>
        <div className="input-range">
          <div className="flex justify-between mt-2">
            <span>1</span>
            <span>2.5</span>
            <span>5</span>
          </div>
          <input
            id="range"
            type="range"
            min={1}
            max={5}
            step={0.1}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer
           accent-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>
      <div className="border rounded-xl py-4 px-6 mt-6 border-gray-400">
        <p className="text-xl font-bold">Categories</p>
        {filteredSubCategories.map((cat) => (
          <div key={cat} className="flex justify-between mt-2">
            <label htmlFor={cat}>{cat}</label>
            <input type="checkbox" id={cat} />
          </div>
        ))}
      </div>
      <div className="border rounded-xl py-4 px-6 mt-6 border-gray-400">
        <p className="text-xl font-bold">Sort By Price</p>
        <div className="flex justify-between mt-2">
          <label htmlFor={"low"}>{"Low to High"}</label>
          <input type="radio" name="sort" id={"low"} />
        </div>
        <div className="flex justify-between mt-2">
          <label htmlFor={"high"}>{"High to Low"}</label>
          <input type="radio" name="sort" id={"high"} />
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
