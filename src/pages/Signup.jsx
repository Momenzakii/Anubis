import React from "react";

const Signup = () => {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center text-white px-4">
      <div className="bg-gray-900 p-10 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-orange-400 mb-6">
          Create Your Account
        </h2>
        <form className="space-y-6">
          <div>
            <label className="block mb-2 text-sm">Username</label>
            <input
              type="text"
              className="w-full p-3 rounded-md bg-black border border-gray-700 text-white"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm">Email</label>
            <input
              type="email"
              className="w-full p-3 rounded-md bg-black border border-gray-700 text-white"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm">Password</label>
            <input
              type="password"
              className="w-full p-3 rounded-md bg-black border border-gray-700 text-white"
              placeholder="••••••••"
            />
          </div>
          <button className="w-full bg-orange-500 hover:bg-orange-600 text-black font-bold py-3 rounded-md transition">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
