import React from 'react';
import { mockProducts } from '@/lib/mock-data';
import ProductCard from '@/components/ProductCard';
import CategoryCard from '@/components/CategoryCard';

const categories = [
  {
    name: 'Necklace',
    imageUrl: 'https://images.unsplash.com/photo-1617196034796-7d7f7a8c1b6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    href: '/products?category=necklace',
  },
  {
    name: 'Earrings',
    imageUrl: 'https://images.unsplash.com/photo-1617196034796-7d7f7a8c1b6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    href: '/products?category=earrings',
  },
  {
    name: 'Rings',
    imageUrl: 'https://images.unsplash.com/photo-1617196034796-7d7f7a8c1b6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    href: '/products?category=rings',
  },
  {
    name: 'Bracelets',
    imageUrl: 'https://images.unsplash.com/photo-1617196034796-7d7f7a8c1b6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    href: '/products?category=bracelets',
  },
];

const HomePage = () => {
  return (
    <div className="bg-gray-50">
      <main>
        {/* Hero Section */}
        <div className="relative">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-50" />
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full object-cover"
                  src="https://images.unsplash.com/photo-1611652022417-a55874e4ce2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Jewellery collection"
                />
                <div className="absolute inset-0 bg-gray-900 bg-opacity-60 mix-blend-multiply" />
              </div>
              <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="block text-white">Latest Jewellery Collection</span>
                  <span className="block text-yellow-300">Shine With Us</span>
                </h1>
                <p className="mt-6 max-w-lg mx-auto text-center text-xl text-gray-200 sm:max-w-3xl">
                  Discover our exquisite collection of handcrafted jewellery.
                </p>
                <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                  <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-1 sm:gap-5">
                    <a
                      href="/products"
                      className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-gray-900 bg-white hover:bg-gray-100 sm:px-8"
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Sections */}
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          {/* Category Section */}
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 mb-6">Shop by Category</h2>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {categories.map((category) => (
              <CategoryCard key={category.name} category={category} />
            ))}
          </div>

          {/* Best Seller Section */}
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 mt-16 mb-6">Best Sellers</h2>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {mockProducts.slice(0, 4).map((product) => ( // Display first 4 as best sellers
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* New Arrivals Section */}
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 mt-16 mb-6">New Arrivals</h2>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {mockProducts.slice(1, 5).map((product) => ( // Display next 4 as new arrivals (example)
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Most Gifted Section */}
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 mt-16 mb-6">Most Gifted</h2>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {mockProducts.slice(0, 4).map((product) => ( // Display first 4 as most gifted (example)
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
