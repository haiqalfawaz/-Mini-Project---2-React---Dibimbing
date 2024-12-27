import React, { useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const RegisterPage = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setError("");
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    // console.log(form);
  };

  const handleRegister = async () => {
    setLoading(true);
    try {
      const res = await axios.post("https://reqres.in/api/register", form);

      localStorage.getItem("token", res.data.token);
      setSuccess("Register Successful");

      setTimeout(() => {
        navigate("/Login");
      }, 1000);

      console.log(res);
    } catch (error) {
      setError(error.response.data.error);
      console.log(error.response);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex w-full h-screen">
      <Sidebar className="hidden md:block" />
      <div className="bg-[#D8C4B6] w-full flex justify-center items-center py-4 px-2 md:px-0">
        <div className="flex flex-col items-center justify-center p-6 border-2 border-black rounded-lg shadow-lg gap-y-6 bg-[#3E5879] w-full max-w-md">
          <h1 className="text-3xl font-bold text-white lg:text-6xl font-nunito">
            Register
          </h1>
          <p className="text-base text-white lg:text-lg font-nunito">
            Register Your Account
          </p>
          <div className="flex flex-col items-start justify-center w-full gap-3">
            <h3 className="text-xl text-white font-nunito">Email</h3>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full px-2 text-center h-9 md:w-96 rounded-xl"
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col items-start justify-center w-full gap-3">
            <h3 className="text-xl text-white font-nunito">Password</h3>
            <input
              type="password"
              placeholder="Enter Your Password"
              className="w-full px-2 text-center h-9 md:w-96 rounded-xl"
              name="password"
              onChange={handleChange}
            />
          </div>
          <button
            className="text-white border border-black rounded-xl px-2 hover:bg-[#D8C4B6] transition-all duration-300 w-full md:w-96 h-9 shadow-lg"
            onClick={handleRegister}
            disabled={loading}
          >
            {loading ? "Loading..." : "Register"}
          </button>
          <Link to="/Login">
            <p className="ml-auto text-sm text-white hover:text-blue-500 hover:cursor-pointer hover:underline">
              Sign In
            </p>
          </Link>
          {success && (
            <p className="text-2xl italic font-bold text-white">{success}</p>
          )}
          {error && (
            <p className="text-2xl italic font-bold text-red-500">{error}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
