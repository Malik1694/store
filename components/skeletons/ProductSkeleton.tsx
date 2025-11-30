import React from 'react';

const ProductSkeleton = () => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md">
      <div className="w-full h-48 bg-gray-200 animate-pulse"></div>
      <div className="p-4">
        <div className="h-6 bg-gray-200 rounded w-3/4 mb-2 animate-pulse"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse"></div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
