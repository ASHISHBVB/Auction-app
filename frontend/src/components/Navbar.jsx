import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white px-4 py-3 flex items-center justify-between">
      {/* Logo */}
      <div className="text-2xl font-bold">AuctionApp</div>
      
      {/* Navigation Links */}
      <ul className="flex space-x-6">
        <li><a href="/" className="hover:text-orange-400 transition duration-300">Home</a></li>
        <li><a href="/auctions" className="hover:text-orange-400 transition duration-300">Auctions</a></li>
        <li><a href="/about" className="hover:text-orange-400 transition duration-300">About</a></li>
        <li><a href="/contact" className="hover:text-orange-400 transition duration-300">Contact</a></li>
      </ul>
      
      {/* Login Button */}
      <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded transition duration-300">
        Login
      </button>
    </nav>
  );
}
