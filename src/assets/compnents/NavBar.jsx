import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/">
          <a href="#" className="text-white text-2xl font-bold text-center">
            🏠 <span className="text-sm md:text-xl">eSHOP</span>
          </a>
        </Link>
        <div className="flex-grow text-center">
          <input
            type="text"
            placeholder="Search..."
            className="px-3 w-80 border focus:outline-none nav-searchbar py-1.5"
          />
          <button className="search-btn"><i className="bi bi-search text-white text-lg py-2.5 px-3 bg-black-600"></i></button>
        </div>
        <div className="flex space-x-6">

          <button className="text-white rounded-full display:block text-lg">
            <Link to="/login">
              <h1>Hello</h1>
              <h1 className="font-bold text-xl">SignUp</h1>
            </Link>
          </button>
          <button className="text-white rounded-full display:block text-lg">
            <h1>Your</h1>
            <h1 className="font-bold text-xl">Shop</h1>
          </button>
          <button className="text-3xl flex text-center">
            <Link to="/checkout">💼</Link>  <span className="text-white text-sm">0</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
