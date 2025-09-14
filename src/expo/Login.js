import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  function sign(e) {
    e.preventDefault();
    navigate('/Signup');
  }

  function login(e) {
    e.preventDefault();
    navigate('/Home');
  }

  return (
    <div className="bg-gradient-to-br from-teal-100 via-teal-200 to-teal-300 min-h-screen flex justify-center items-center px-4">
      <form className="bg-white shadow-xl rounded-2xl max-w-sm w-full p-8 flex flex-col gap-4">
        <h1 className="text-3xl font-bold text-center text-teal-700">Login</h1>

        {/* Username */}
        <input
          type="text"
          placeholder="Username"
          className="p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition-all"
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition-all"
        />

        {/* Login Button */}
        <button
          onClick={login}
          className="bg-teal-500 text-white font-semibold py-2 rounded-xl hover:bg-teal-600 transition-all shadow-md"
        >
          Login
        </button>

        {/* Signup Link */}
        <p className="text-center text-gray-600 text-sm">
          Don't have an account?{' '}
          <button onClick={sign} className="text-teal-600 font-medium hover:underline">
            Signup
          </button>
        </p>
      </form>
    </div>
  );
}
