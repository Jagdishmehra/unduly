import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../store/productSlice';

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState('');
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <div className="flex justify-center items-center my-4">
      <label className="text-gray-700 font-semibold mr-2">Search Products:</label>
      <input
        type="text"
        value={searchInput}
        onChange={handleSearchChange}
        className="form-input px-6 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        placeholder="Type to search..."
      />
    </div>
  );
};

export default SearchBar;
