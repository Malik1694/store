import React from 'react';

const Pagination = () => {
  return (
    <div className="flex justify-center items-center space-x-2 mt-8">
      <button className="px-4 py-2 border rounded-md bg-white text-gray-700 hover:bg-gray-100">
        Previous
      </button>
      {/* Page numbers */}
      <button className="px-4 py-2 border rounded-md bg-white text-gray-700 hover:bg-gray-100">
        1
      </button>
      <button className="px-4 py-2 border rounded-md bg-white text-gray-700 hover:bg-gray-100">
        Next
      </button>
    </div>
  );
};

export default Pagination;
