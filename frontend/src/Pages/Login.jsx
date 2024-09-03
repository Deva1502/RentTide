import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-600">
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
          <h1 className="text-4xl text-center mb-6 font-bold text-gray-800">Log In</h1>
          <p className="text-center mb-6 text-gray-600">Welcome back! Please enter your details to continue.</p>
          <form className="flex flex-col gap-4">
            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="p-3 w-full rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                required
                value={formData.email}
                onChange={handleChange}
              />
              <span className="absolute top-1/2 transform -translate-y-1/2 right-3 text-gray-400">@</span>
            </div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              required
              value={formData.password}
              onChange={handleChange}
            />
            <button className="p-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg text-white uppercase font-semibold hover:opacity-90 transition-all duration-300">Log In</button>
          </form>
          <div className="mt-6 text-center">
            <p>Don't Have an Account?</p>
            <Link to="/register">
              <span className="text-blue-700 hover:underline">Sign Up</span>
            </Link>
          </div>
          <div className="mt-4 text-center">
            <Link to="/forgot-password">
              <span className="text-red-500 hover:underline">Forgot Password?</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
