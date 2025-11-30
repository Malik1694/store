import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              Zeesy
            </Link>
          </div>

          {/* Navigation Links (Center) */}
          <div className="hidden md:flex md:space-x-8 items-center">
            <Link href="/" className="text-gray-500 hover:text-gray-900 font-medium">
              Home
            </Link>
            <Link href="/products" className="text-gray-500 hover:text-gray-900 font-medium">
              Shop
            </Link>
            <Link href="/products?sort=bestselling" className="text-gray-500 hover:text-gray-900 font-medium">
              Best Sellers
            </Link>
            <Link href="/products?sort=newest" className="text-gray-500 hover:text-gray-900 font-medium">
              New Arrivals
            </Link>
            <Link href="/reviews" className="text-gray-500 hover:text-gray-900 font-medium">
              Client Reviews
            </Link>
            <Link href="/track-order" className="text-gray-500 hover:text-gray-900 font-medium">
              Track Order
            </Link>
          </div>

          {/* Utility Icons (Right) */}
          <div className="flex items-center space-x-4">
            {/* Search Icon */}
            <button className="text-gray-500 hover:text-gray-900">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            {/* Cart Icon */}
            <Link href="/cart" className="text-gray-500 hover:text-gray-900 relative">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 0a2 2 0 100 4 2 2 0 000-4z" />
              </svg>
              <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">0</span>
            </Link>
            {/* User/Account Icon */}
            <Link href="/dashboard" className="text-gray-500 hover:text-gray-900">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
