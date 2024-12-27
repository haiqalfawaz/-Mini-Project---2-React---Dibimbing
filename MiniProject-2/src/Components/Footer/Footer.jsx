import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-5 bg-[#213555]">
      <div className="p-4">
        <h1 className="font-sans text-2xl font-bold text-white lg:text-3xl">
          TimelessSpaces
        </h1>
      </div>
      <div>
        <p className="font-sans text-lg text-white lg:text-xl">
          &copy; 2024 TimelessSpaces. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
