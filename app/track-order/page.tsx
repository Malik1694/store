import React from 'react';

const TrackOrderPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Track Order</h1>
      <p>This is the track order page.</p>
      <form className="mt-8 max-w-md">
        <div className="mb-4">
          <label htmlFor="orderId" className="block text-gray-700 font-medium mb-2">Order ID</label>
          <input type="text" id="orderId" name="orderId" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
          <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600">Track</button>
      </form>
    </div>
  );
};

export default TrackOrderPage;
