import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Import icons
import { BsBoxArrowRight } from "react-icons/bs";
import { BsBoxArrowLeft } from "react-icons/bs";
import { AiOutlineRollback } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { FaUserAltSlash } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";

const Sidebar = () => {
  const [isSidebar, setIsSidebar] = useState(false);

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleSidebar = () => {
    setIsSidebar(!isSidebar);
  };

  const handleLogout = () => {
    localStorage.clear();
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <div
      className={`hidden md:flex flex-col justify-between items-center p-4 bg-[#213555] ${
        isSidebar ? "w-1/5" : "w-32"
      } transition-all duration-500`}
    >
      <div
        className={
          isSidebar
            ? "flex flex-row md:flex-col justify-center items-center cursor-pointer gap-x-10"
            : "flex flex-col justify-center items-center cursor-pointer gap-y-2"
        }
      >
        {isSidebar && (
          <Link to="/">
            <h1 className="font-sans text-xl font-bold text-white lg:text-2xl">
              TimelessSpaces
            </h1>
          </Link>
        )}

        {!isSidebar && (
          <BsBoxArrowRight
            onClick={handleSidebar}
            className="text-3xl text-white"
          />
        )}
        {isSidebar && (
          <BsBoxArrowLeft
            onClick={handleSidebar}
            className="text-3xl text-white"
          />
        )}
      </div>

      <div className="flex flex-col items-start justify-center gap-y-3">
        {token ? (
          <Link to="/Home">
            <div
              className={`flex items-center gap-2 p-2 text-3xl text-white transition-all duration-300 border-2 rounded-xl hover:scale-105 ${
                isSidebar ? "w-36" : "w-fit"
              }`}
            >
              <RxDashboard />
              {isSidebar && <h3>Home</h3>}
            </div>
          </Link>
        ) : (
          <Link to="/">
            <div
              className={`flex items-center gap-2 p-2 text-3xl text-white transition-all duration-300 border-2 rounded-xl hover:scale-105 ${
                isSidebar ? "w-36" : "w-fit"
              }`}
            >
              <AiOutlineRollback />
              {isSidebar && <h3>Back</h3>}
            </div>
          </Link>
        )}

        {token ? (
          <div
            className={`flex items-center gap-2 p-2 text-3xl text-white transition-all duration-300 border-2 rounded-xl hover:scale-105 cursor-pointer ${
              isSidebar ? "w-36" : "w-fit"
            }`}
            onClick={handleLogout}
          >
            <FaUserAltSlash />
            {isSidebar && <h3>Logout</h3>}
          </div>
        ) : (
          <Link to="/Login">
            <div
              className={`flex items-center gap-2 p-2 text-3xl text-white transition-all duration-300 border-2 rounded-xl hover:scale-105 ${
                isSidebar ? "w-36" : "w-fit"
              }`}
            >
              <FaUserAlt />
              {isSidebar && <h3>Login</h3>}
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
