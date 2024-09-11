import React from 'react';
import { FaSearch, FaBell, FaCog, FaGlobe } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-white p-4 shadow flex items-center justify-between">
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search for items..."
          className="p-2 border rounded-md w-80"
        />
        <FaSearch className="ml-2 text-gray-500" />
      </div>
      <div className="flex items-center space-x-4">
        <FaGlobe className="text-gray-600" />
        <FaCog className="text-gray-600" />
        <FaBell className="text-gray-600" />
        <img
          src="https://via.placeholder.com/40"
          alt="User Profile"
          className="w-10 h-10 rounded-full"
        />
        <span>Abhishek Susarla</span>
      </div>
    </header>
  );
};

export default Header;
