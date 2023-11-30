import React from "react";
import Navigation from "./components/Nav";

export default function Dashboard() {
  return (
    <div>
      <div className="flex">
        <Navigation />

        <main className="flex-1 ml-64 p-8">
          <div className="container m-auto mt-5 bg-red-100 p-4 rounded-lg text-gray-800">
            <h1 className="text-2xl font-bold text-red-500 mb-4">Dashboard</h1>

            <div className="grid grid-cols-4 gap-8 mb-5">
              <div className="border-gray-400 border bg-red-200 hover:border-gray-900 p-6 flex flex-col items-center justify-center text-black rounded-md">
                <h3 className="text-2xl font-semibold mb-2">All Players</h3>
                <p className="text-4xl font-bold">10</p>
              </div>

              <div className="border-gray-400 border bg-red-200 hover:border-gray-900 p-6 flex flex-col items-center justify-center text-black rounded-md">
                <h3 className="text-2xl font-semibold mb-2">All Teams</h3>
                <p className="text-4xl font-bold">2</p>
              </div>

              <div className="border-gray-400 border bg-red-200 hover:border-gray-900 p-6 flex flex-col items-center justify-center text-black rounded-md">
                <h3 className="text-2xl font-semibold mb-2">All Matches</h3>
                <p className="text-4xl font-bold">3</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="border-gray-400 border bg-red-200 hover:border-gray-900 p-6  text-black rounded-md">
                <h3 className="text-2xl font-semibold mb-6">
                  Add points to players
                </h3>
                <div className="col-span-2 sm:col-span-2 mb-2">
                  <label htmlFor="isHeld" className="font-medium">
                    Select Player
                  </label>
                  <select
                    className="w-full p-2 border rounded"
                    name="isHeld"
                    id="isHeld"
                  >
                    <option value="true">Player 1</option>
                    <option value="false">Player 2</option>
                  </select>
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
                <button
                  type="submit"
                  className="w-full mt-4 bg-red-500 text-white p-2 rounded hover:bg-red-600"
                >
                  Add Points
                </button>
              </div>

              <div className="border-gray-400 border bg-red-200 hover:border-gray-900 p-6 flex flex-col items-center justify-start text-black rounded-md">
                <h3 className="text-2xl font-semibold mb-6">
                  Most Points Player
                </h3>
                <p className="text-xl font-semibold mb-4">1:   Player name</p>
                <p className="text-xl font-semibold mb-4">2:   Player name</p>
                <p className="text-xl font-semibold mb-4">3:   Player name</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
