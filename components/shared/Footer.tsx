import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 mt-12 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Section 1: About/Company Name */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Zeesy</h3>
            <p className="text-sm">
              Your ultimate destination for elegant accessories and exquisite jewellery. Discover unique pieces handcrafted with love.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white"><FaFacebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><FaInstagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><FaTwitter size={20} /></a>
            </div>
          </div>

          {/* Section 2: Information */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Information</h3>
            <ul>
              <li className="mb-2"><Link href="/about" className="text-sm hover:text-white">About Us</Link></li>
              <li className="mb-2"><Link href="/contact" className="text-sm hover:text-white">Contact Us</Link></li>
              <li className="mb-2"><Link href="/blogs" className="text-sm hover:text-white">Blogs</Link></li>
              <li className="mb-2"><Link href="/track-order" className="text-sm hover:text-white">Track Your Order</Link></li>
              <li className="mb-2"><Link href="/how-to-order" className="text-sm hover:text-white">How To Order?</Link></li>
            </ul>
          </div>

          {/* Section 3: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2"><Link href="/products?category=necklace" className="text-sm hover:text-white">Necklace</Link></li>
              <li className="mb-2"><Link href="/products?category=earrings" className="text-sm hover:text-white">Earrings</Link></li>
              <li className="mb-2"><Link href="/products?category=rings" className="text-sm hover:text-white">Rings</Link></li>
              <li className="mb-2"><Link href="/products?category=bracelets" className="text-sm hover:text-white">Bracelets</Link></li>
            </ul>
          </div>

          {/* Section 4: Contact Us / Payment Methods */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <p className="text-sm mb-2">Email: info@zeesy.pk</p>
            <p className="text-sm mb-2">Phone: +92 123 4567890</p>
            <p className="text-sm mb-4">Address: 123 Main Street, City, Country</p>
            
            <h3 className="text-lg font-semibold text-white mb-4">We Accept</h3>
            <div className="flex flex-wrap gap-2">
              {/* Payment Method Icons - Placeholders */}
              <img src="https://via.placeholder.com/50x30.png?text=Visa" alt="Visa" className="h-6" />
              <img src="https://via.placeholder.com/50x30.png?text=UPI" alt="UPI" className="h-6" />
              <img src="https://via.placeholder.com/50x30.png?text=Paytm" alt="Paytm" className="h-6" />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
          &copy; {new Date().getFullYear()} Zeesy. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
