import React from "react";

export default function AdminLogin() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-96 p-6 border rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-7 text-center text-red-500">
          Admin Login
        </h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border rounded"
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-2 border rounded"
              placeholder="Password"
            />
          </div>
          <button className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
