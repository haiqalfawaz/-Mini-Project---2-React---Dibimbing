import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import axios from "axios";
import { useParams } from "react-router-dom";

// import icons
import { HiOutlineMail } from "react-icons/hi";
import Button from "../Button/Button";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const UserDetails = ({ data }) => {
  const { id } = useParams();
  const [singleUser, setSingleUser] = useState({});

  const getSingleUser = async () => {
    try {
      const res = await axios.get(`https://reqres.in/api/users/${id}`);
      setSingleUser(res.data.data);
      console.log("res", res);
    } catch (error) {
      console.log("err", error);
    }
  };

  useEffect(() => {
    getSingleUser();
  }, [id]);

  const userData = data.find((user) => user.id === parseInt(id));

  return (
    <div className="flex justify-center w-full h-auto md:h-screen">
      <Sidebar />
      <div className="w-full bg-[#D8C4B6] p-10 flex flex-col items-center gap-8">
        <h1 className="text-3xl text-center sm:text-4xl lg:text-5xl font-nunito">
          Behold the mastery of those who shape spaces with vision, turning
          dreams into tangible artistry.
        </h1>
        <div className="flex flex-col lg:flex-row items-center justify-center p-4 border-4 border-black rounded-lg shadow-xl w-full max-w-4xl bg-[#213555] gap-4 hover:scale-105 transition-all duration-300 text-white">
          <div className="flex flex-col items-center justify-center gap-2">
            <div>
              {singleUser.avatar ? (
                <img
                  src={singleUser.avatar}
                  alt="User Avatar"
                  className="w-40 h-40 border border-black sm:w-56 sm:h-56 lg:w-72 lg:h-72 rounded-xl"
                />
              ) : (
                <p>No Avatar Available</p>
              )}
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <h1 className="text-3xl font-bold sm:text-4xl font-montserrat">
                {singleUser.first_name} {singleUser.last_name}
              </h1>
              <h3 className="flex items-center justify-center gap-2 text-xl font-semibold sm:text-2xl font-inter">
                <HiOutlineMail />
                {singleUser.email}
              </h3>
            </div>
          </div>
          <div className="mt-4 lg:mt-0">
            {userData && (
              <div className="w-full text-center text-white sm:w-96 lg:w-full">
                <h2 className="text-xl font-semibold sm:text-2xl">
                  Experience
                </h2>
                <p>{userData.experience}</p>
                <h2 className="mt-4 text-xl font-semibold sm:text-2xl">
                  Biography
                </h2>
                <p>{userData.biography}</p>
                <h2 className="mt-4 text-xl font-semibold sm:text-2xl">
                  Specialization
                </h2>
                <p>{userData.specialization}</p>
                <h2 className="mt-4 text-xl font-semibold sm:text-2xl">
                  Highlight Projects
                </h2>
                <p>{userData.highlight_projects}</p>
                <div className="flex items-center justify-center mt-4 text-4xl cursor-pointer gap-x-3">
                  <p>
                    <FaFacebook />
                  </p>
                  <p>
                    <FaXTwitter />
                  </p>
                  <p>
                    <FaLinkedin />
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
        <Button />
      </div>
    </div>
  );
};

export default UserDetails;
