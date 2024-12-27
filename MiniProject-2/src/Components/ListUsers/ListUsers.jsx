import React from "react";
import User from "../User/User";

// Import Icons
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Button from "../Button/Button";

const ListUsers = ({ users, nextPage, prevPage, pagination }) => {
  return (
    <div className="flex flex-col items-center justify-between w-full gap-3 p-5 bg-[#D8C4B6]">
      <div>
        <h1 className="text-xl text-center md:text-4xl font-montserrat">
          Discover the interior designer of your dreams, where visions come to
          life.
        </h1>
      </div>

      <div className="grid w-full grid-cols-1 overflow-y-auto lg:grid-cols-2 gap-y-6 h-3/4 place-items-center lg:h-auto">
        {users.map((user) => {
          return <User key={user.id} user={user} />;
        })}
      </div>

      <div className="flex items-center justify-center gap-3 mb-3">
        <button
          onClick={prevPage}
          className="p-2 border border-black rounded-lg cursor-pointer bg-[#213555] text-white"
        >
          <IoIosArrowBack />
        </button>
        <h3>
          {pagination.currentPage} of {pagination.total_pages}
        </h3>
        <button
          onClick={nextPage}
          className="p-2 border border-black rounded-lg cursor-pointer bg-[#213555] text-white"
        >
          <IoIosArrowForward />
        </button>
      </div>
      <Button />
    </div>
  );
};

export default ListUsers;
