import React, { useState } from "react";

import Navigation from "./components/Nav";
export default function UpdateTeam() {
  const [teamData, setTeamData] = useState({
    name: "",
    players: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTeamData({
      ...teamData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission and API requests here
    console.log("Team Data:", teamData);
  };
  return (
    <div>
      <Navigation />
      <main className="flex-1 ml-64 p-8">
        <div className="container m-auto mt-5 bg-red-100 p-4 rounded-lg text-gray-800">
          <h1 className="text-2xl font-bold text-red-500 mb-4">Update Team</h1>
          <form
            onSubmit={handleSubmit}
            className="p-4 border border-gray-300 rounded-lg shadow-md"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 sm:col-span-1">
                <label htmlFor="name" className="block font-medium">
                  Team Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={teamData.name}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  placeholder="Team Name"
                />
              </div>
              <div className="col-span-2">
                <label htmlFor="players" className="block font-medium">
                  Players
                </label>
                <textarea
                  id="players"
                  name="players"
                  value={teamData.players}
                  onChange={handleChange}
                  className="w-full p-2 border rounded h-20"
                  placeholder="Enter players' names separated by commas"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full mt-4 bg-red-500 text-white p-2 rounded hover:bg-red-600"
            >
              Update Team
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
