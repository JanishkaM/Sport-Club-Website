import React from "react";
import Navigation from "./components/Nav";
export default function Players() {
  return (
    <div className="flex">
      <Navigation />

      <main className="flex-1 ml-64 p-8">
        <div className="bg-red-100 container m-auto mt-6 p-4 rounded-lg text-gray-800">
          <h1 className="text-2xl font-bold text-red-500 mb-4">
            Update Player
          </h1>
          <form className="p-4 border border-gray-300 rounded-lg shadow-md">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 sm:col-span-1">
                <label htmlFor="name" className="block font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-2 border rounded"
                  placeholder="Player Name"
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label htmlFor="address" className="block font-medium">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="w-full p-2 border rounded"
                  placeholder="Address"
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label htmlFor="contact" className="block font-medium">
                  Contact
                </label>
                <input
                  type="text"
                  id="contact"
                  name="contact"
                  className="w-full p-2 border rounded"
                  placeholder="Contact"
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
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
              <div className="col-span-2 sm:col-span-1">
                <label htmlFor="team" className="block font-medium">
                  Team
                </label>
                <input
                  type="text"
                  id="team"
                  name="team"
                  className="w-full p-2 border rounded"
                  placeholder="Team"
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label htmlFor="points" className="block font-medium">
                  Points
                </label>
                <input
                  type="number"
                  id="points"
                  name="points"
                  className="w-full p-2 border rounded"
                  placeholder="Points"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full mt-4 bg-red-500 text-white p-2 rounded hover:bg-red-600"
            >
              Update Player
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
