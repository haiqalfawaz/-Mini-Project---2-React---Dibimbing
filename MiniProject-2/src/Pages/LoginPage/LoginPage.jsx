import React, { useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Button from "../../Components/Button/Button";

const LoginPage = () => {
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
  };

  const handleLogin = async () => {
    setLoading(true);
    try {
      const res = await axios.post("https://reqres.in/api/login", form);
      localStorage.setItem("token", res.data.token);
      setSuccess("Login Successful");

      setTimeout(() => {
        navigate("/Home");
      }, 1000);
    } catch (error) {
      setError(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex w-full h-screen">
      <Sidebar className="hidden md:block" />

      <div className="bg-[#D8C4B6] w-full flex flex-col md:flex-row justify-center items-center py-4 px-2 md:px-0 gap-6">
        <div className="flex flex-col items-center justify-center p-6 border-2 border-black rounded-lg shadow-lg gap-y-6 bg-[#3E5879] w-full max-w-md">
          <h1 className="text-3xl font-bold text-white lg:text-6xl font-nunito">
            Login
          </h1>
          <p className="text-base text-white lg:text-lg font-nunito">
            Login to Your Account
          </p>

          <div className="flex flex-col items-start justify-center w-full gap-3">
            <h3 className="text-sm text-white md:text-xl font-nunito">Email</h3>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full px-2 text-center h-9 md:w-96 rounded-xl"
              name="email"
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col items-start justify-center w-full gap-3">
            <h3 className="text-sm text-white md:text-xl font-nunito">
              Password
            </h3>
            <input
              type="password"
              placeholder="Enter Your Password"
              className="w-full px-2 text-center h-9 md:w-96 rounded-xl"
              name="password"
              onChange={handleChange}
            />
            <p className="ml-auto text-sm text-white hover:text-blue-500 hover:cursor-pointer hover:underline">
              Forgot Your Password?
            </p>
          </div>

          <button
            className="text-white border border-black rounded-xl px-2 hover:bg-[#D8C4B6] transition-all duration-300 w-full md:w-96 h-9 shadow-lg"
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? "Loading..." : "Login"}
          </button>

          <Link to="/Register">
            <p className="ml-auto text-sm text-white hover:text-blue-500 hover:cursor-pointer hover:underline">
              Don't have an Account? Register here
            </p>
          </Link>

          {error && (
            <p className="text-2xl italic font-bold text-red-500">{error}!</p>
          )}
          {success && (
            <p className="text-2xl italic font-bold text-white">{success}</p>
          )}
        </div>
        <Button />
      </div>
    </div>
  );
};

export default LoginPage;
