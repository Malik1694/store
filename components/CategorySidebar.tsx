import React from 'react';

const CategorySidebar = () => {
  return (
    <aside className="w-64 bg-gray-50 p-4">
      <h3 className="text-xl font-bold mb-4">Categories</h3>
      <ul>
        {/* Map through categories here */}
        <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900">Category 1</a></li>
        <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900">Category 2</a></li>
        <li className="mb-2"><a href="#" className="text-gray-600 hover:text-gray-900">Category 3</a></li>
      </ul>
    </aside>
  );
};

export default CategorySidebar;
