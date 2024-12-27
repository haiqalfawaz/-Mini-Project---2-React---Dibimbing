import React from "react";
import { Link, useNavigate } from "react-router-dom";

// Import Icons
import { AiOutlineRollback } from "react-icons/ai";
import { RxDashboard } from "react-icons/rx";
import { FaUserAlt } from "react-icons/fa";
import { FaUserAltSlash } from "react-icons/fa";

const Button = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.clear();
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <div className="block md:hidden">
      <div className="flex items-center justify-center gap-3">
        {token ? (
          <Link to="/Home">
            <div className="flex items-center gap-2 p-2 text-3xl text-white transition-all duration-300 border border-black rounded-xl hover:scale-105 bg-[#213555]">
              <RxDashboard />
            </div>
          </Link>
        ) : (
          <Link to="/">
            <div className="flex items-center gap-2 p-2 text-3xl text-white transition-all duration-300 border border-black rounded-xl hover:scale-105 bg-[#213555]">
              <AiOutlineRollback />
            </div>
          </Link>
        )}
        {token ? (
          <Link>
            <div
              className="flex items-center gap-2 p-2 text-3xl text-white transition-all duration-300 border border-black rounded-xl hover:scale-105 bg-[#213555]"
              onClick={handleLogout}
            >
              <FaUserAltSlash />
            </div>
          </Link>
        ) : (
          <Link>
            <div className="flex items-center gap-2 p-2 text-3xl text-white transition-all duration-300 border border-black rounded-xl hover:scale-105 bg-[#213555]">
              <FaUserAlt />
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Button;
