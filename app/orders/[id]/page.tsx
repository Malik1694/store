import React from 'react';

const OrderTrackingPage = ({ params }: { params: { id: string } }) => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold my-8">Order: {params.id}</h1>
      {/* Order status, items, shipping details, etc. */}
    </div>
  );
};

export default OrderTrackingPage;
