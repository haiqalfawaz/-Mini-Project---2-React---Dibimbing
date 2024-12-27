import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed top-0 z-20 flex items-center justify-between w-full max-w-full px-6 py-4 mt-2 transform -translate-x-1/2 bg-transparent border border-black rounded-3xl backdrop-blur-lg left-1/2 sm:max-w-4xl">
      <div>
        <Link to="/">
          <h1 className="font-sans text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            TimelessSpaces
          </h1>
        </Link>
      </div>
      <div className="space-x-4">
        <Link to="/Login">
          <button className="p-2 text-white font-semibold border-2 border-white rounded-xl hover:bg-white hover:text-[#213555] transition-all duration-200 text-sm sm:text-base lg:text-lg">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
