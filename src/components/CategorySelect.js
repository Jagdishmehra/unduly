import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedCategory } from '../store/productSlice';

const CategorySelect = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.products.categories);

  const handleCategoryChange = (e) => {
    dispatch(setSelectedCategory(e.target.value));
  };

  return (
    <div className=" flex items-center mt-4 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mx-auto">
      <label className="block text-gray-700 text-md font-bold mb-1 mx-2">Select Category:</label>
      <div className="relative">
        <select
          onChange={handleCategoryChange}
          className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category.slug} value={category.slug}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CategorySelect;
