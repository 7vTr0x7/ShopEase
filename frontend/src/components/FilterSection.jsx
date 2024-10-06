import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProducts } from "../redux/slices/productSlice";

const FilterSection = () => {
  const [priceFilter, setPriceFilter] = useState("");
  const [RatingRange, setRatingRange] = useState("2.5");
  const [selectedCategories, setSelectedCategories] = useState([]);

  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.products);

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

  const resetHandler = () => {
    setPriceFilter("");
  };

  const handlePriceFilter = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setPriceFilter(value);
      const filtered = products.filter((prod) =>
        value == "200"
          ? prod.price >= Number(value)
          : prod.price <= Number(value)
      );

      dispatch(updateProducts(filtered));
    }
  };

  const filterByRatingRange = (e) => {
    const { value } = e.target;

    const filtered = products.filter((prod) => prod.rating >= value);
    dispatch(updateProducts(filtered));
    setRatingRange(value);
  };

  const handleFilterByCategory = (e) => {
    const { value, checked } = e.target;

    let updatedCategories;
    if (checked) {
      updatedCategories = [...selectedCategories, value];
    } else {
      updatedCategories = selectedCategories.filter((cat) => cat !== value);
    }

    setSelectedCategories(updatedCategories);

    if (updatedCategories.length > 0) {
      const filtered = products.filter((prod) =>
        updatedCategories.includes(prod.categories.subCategory)
      );
      dispatch(updateProducts(filtered));
    } else {
      dispatch(updateProducts(products));
    }
  };

  const handleSort = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      if (value === "low") {
        const sorted = [...products].sort((a, b) => a.price - b.price);
        dispatch(updateProducts(sorted));
      } else {
        const sorted = [...products].sort((a, b) => b.price - a.price);
        dispatch(updateProducts(sorted));
      }
    }
  };

  return (
    <div className="px-8 ">
      <div className="flex justify-between items-center">
        <p className="text-3xl font-bold">Filters</p>
        <button
          onClick={resetHandler}
          className="border text-lg rounded-2xl border-gray-400 px-4 ">
          Reset
        </button>
      </div>
      <div className="border rounded-xl py-4 px-6 mt-6 border-gray-400">
        <p className="text-xl font-bold">Price</p>
        <div className="flex justify-between mt-2">
          <label htmlFor="below50">Below $50</label>
          <input
            type="radio"
            name="price"
            onChange={handlePriceFilter}
            value={50}
            checked={priceFilter.includes("50")}
            id="below50"
          />
        </div>
        <div className="flex justify-between mt-2">
          <label htmlFor="below100">Below $100</label>
          <input
            type="radio"
            name="price"
            onChange={handlePriceFilter}
            value={100}
            checked={priceFilter.includes("100")}
            id="below100"
          />
        </div>
        <div className="flex justify-between mt-2">
          <label htmlFor="below199">Below $199</label>
          <input
            type="radio"
            name="price"
            onChange={handlePriceFilter}
            value={199}
            checked={priceFilter.includes("199")}
            id="below199"
          />
        </div>
        <div className="flex justify-between mt-2">
          <label htmlFor="over200">Over $200</label>
          <input
            type="radio"
            name="price"
            onChange={handlePriceFilter}
            value={200}
            checked={priceFilter.includes("200")}
            id="over200"
          />
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
            value={RatingRange}
            onChange={filterByRatingRange}
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
            <input
              type="checkbox"
              name="category"
              value={cat}
              checked={selectedCategories.includes(cat)}
              onChange={handleFilterByCategory}
              id={cat}
            />
          </div>
        ))}
      </div>
      <div className="border rounded-xl py-4 px-6 mt-6 border-gray-400">
        <p className="text-xl font-bold">Sort By Price</p>
        <div className="flex justify-between mt-2">
          <label htmlFor={"low"}>{"Low to High"}</label>
          <input
            type="radio"
            name="sort"
            value="low"
            onChange={handleSort}
            id={"low"}
          />
        </div>
        <div className="flex justify-between mt-2">
          <label htmlFor={"high"}>{"High to Low"}</label>
          <input
            type="radio"
            name="sort"
            value="high"
            onChange={handleSort}
            id={"high"}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
