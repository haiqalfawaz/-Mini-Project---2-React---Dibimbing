import React from "react";
import { Link } from "react-router-dom";

const User = ({ user }) => {
  return (
    <div className="flex items-center flex-col md:flex-row justify-between w-2/3 gap-2 p-4 border-4 border-black shadow-2xl rounded-xl text-white  bg-[#3E5879]">
      <img
        src={user.avatar}
        alt={user.first_name}
        className="rounded-xl w-[128px] h-[128px]"
      />
      <div className="flex flex-col items-center justify-center gap-5 text-center">
        <h3 className="text-2xl font-semibold font-nunito">
          {user.first_name} {user.last_name}
        </h3>
        <Link to={`/User-Details/${user.id}`}>
          <button className="p-2 border border-black bg-[#213555] font-semibold rounded-lg hover:scale-95 transition-all duration-300">
            See Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default User;
