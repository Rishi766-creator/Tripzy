import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [details, setDetails] = useState({
    name: "",
    age: "",
    gender: "",
    password: "",
    confirm: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  }

  function check(e) {
    e.preventDefault();

    if (!/^[A-Za-z]+$/.test(details.name)) {
      return setError("Name should only contain alphabets");
    } else if (details.age < 18) {
      return setError("User should be 18 years or older");
    } else if (details.password.length < 6) {
      return setError("Password should be at least 6 characters long");
    } else if (details.password !== details.confirm) {
      return setError("Passwords do not match");
    }

    setError("");
    navigate("/login");
  }

  return (
    <div className="bg-gradient-to-br from-teal-100 via-teal-200 to-teal-300 min-h-screen flex justify-center items-center px-4">
      <form
        onSubmit={check}
        className="bg-white shadow-xl rounded-2xl max-w-sm w-full p-8 flex flex-col gap-4"
      >
        <h1 className="text-3xl font-bold text-center text-teal-700">Signup</h1>

        {/* Error Message */}
        {error && (
          <p className="text-red-500 bg-red-50 border border-red-200 rounded-md p-2 text-sm text-center">
            {error}
          </p>
        )}

        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all"
        />

        {/* Age */}
        <input
          type="number"
          name="age"
          placeholder="Age"
          onChange={handleChange}
          className="p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all"
        />

        {/* Gender */}
        <div className="flex justify-between bg-gray-50 rounded-lg p-3 text-gray-700">
          <label className="flex items-center gap-1">
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={handleChange}
            />
            Male
          </label>
          <label className="flex items-center gap-1">
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={handleChange}
            />
            Female
          </label>
          <label className="flex items-center gap-1">
            <input
              type="radio"
              name="gender"
              value="other"
              onChange={handleChange}
            />
            Other
          </label>
        </div>

        {/* Password */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all"
        />

        {/* Confirm Password */}
        <input
          type="password"
          name="confirm"
          placeholder="Confirm Password"
          onChange={handleChange}
          className="p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all"
        />

        {/* Signup Button */}
        <button
          type="submit"
          className="bg-teal-500 text-white font-semibold py-2 rounded-xl hover:bg-teal-600 transition-all shadow-md"
        >
          Signup
        </button>

        {/* Already have account */}
        <p className="text-center text-gray-600 text-sm">
          Already have an account?{" "}
          <button
            type="button"
            onClick={() => navigate("/login")}
            className="text-teal-600 font-medium hover:underline"
          >
            Login
          </button>
        </p>
      </form>
    </div>
  );
}
