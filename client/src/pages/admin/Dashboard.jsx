import React from "react";
import Navigation from "./components/Nav";

export default function Dashboard() {
  return (
    <div>
      <div className="flex">
        <Navigation />

        <main className="flex-1 ml-64 p-8">
          <div className="container m-auto mt-5 bg-red-100 p-4 rounded-lg text-gray-800">
            <h1 className="text-2xl font-bold text-red-500 mb-4">
              Dashboard
            </h1>

            <div className="grid grid-cols-4 gap-8">
              <div className="bg-red-500 hover:bg-red-600 p-6 flex flex-col items-center justify-center text-white rounded-md">
                <h3 className="text-2xl font-semibold mb-2">All Players</h3>
                <p className="text-4xl font-bold">1</p>
              </div>

              <div className="bg-red-500 hover:bg-red-600 p-6 flex flex-col items-center justify-center text-white rounded-md">
                <h3 className="text-2xl font-semibold mb-2">All Teams</h3>
                <p className="text-4xl font-bold">2</p>
              </div>

              <div className="bg-red-500 hover:bg-red-600 p-6 flex flex-col items-center justify-center text-white rounded-md">
                <h3 className="text-2xl font-semibold mb-2">All Matches</h3>
                <p className="text-4xl font-bold">3</p>
              </div>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}
