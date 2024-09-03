import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
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
          <h1 className="text-4xl text-center mb-6 font-bold text-gray-800">Sign Up</h1>
          <p className="text-center mb-6 text-gray-600">Join us and enjoy a seamless home rental experience!</p>
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
              type="text"
              name="firstName"
              placeholder="First Name"
              className="p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              required
              value={formData.firstName}
              onChange={handleChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              required
              value={formData.lastName}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              required
              value={formData.password}
              onChange={handleChange}
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            <button className="p-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg text-white uppercase font-semibold hover:opacity-90 transition-all duration-300">Register</button>
          </form>
          <div className="mt-6 text-center">
            <p>Already Have an Account?</p>
            <Link to="/login">
              <span className="text-blue-700 hover:underline">Log in</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
