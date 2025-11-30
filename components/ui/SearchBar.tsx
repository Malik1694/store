import React from 'react';

const SearchBar = () => {
  return (
    <div className="my-8">
      <input
        type="text"
        placeholder="Search for products..."
        className="w-full px-4 py-2 border rounded-md"
      />
    </div>
  );
};

export default SearchBar;
