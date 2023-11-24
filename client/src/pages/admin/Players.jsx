import React from "react";
import Navigation from "./components/Nav";

const players = [
  {
    id: 1,
    name: "John Doe",
    address: "123 Main St",
    contact: "555-555-5555",
    email: "johndoe@example.com",
    team: "Red Team",
    points: 100,
    age: 27,
  },
  {
    id: 2,
    name: "Alice Smith",
    address: "456 Elm St",
    contact: "555-555-1234",
    email: "alicesmith@example.com",
    team: "Blue Team",
    points: 85,
    age: 24,
  },
  // Add more player objects here
];

export default function Players() {
  return (
    <div className="flex">
      <Navigation />

      <main className="flex-1 ml-64 p-8">
        <div className="bg-red-100 container m-auto mt-6 p-4 rounded-lg text-gray-800">
          <h1 className="text-2xl font-bold text-red-500 mb-4">
            Player Details
          </h1>
          {players.map((player) => (
            <div
              key={player.id}
              className="mt-6 p-4 border border-gray-300 rounded-lg shadow-md"
            >
              <p className="text-xl font-semibold mb-2">{player.name}</p>
              <div className="flex flex-wrap">
                <div className="w-full sm:w-1/2 md:w-1/3">
                  <p>
                    <strong>Address:</strong> {player.address}
                  </p>
                  <p>
                    <strong>Contact:</strong> {player.contact}
                  </p>
                  <p>
                    <strong>Email:</strong> {player.email}
                  </p>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3">
                  <p>
                    <strong>Team:</strong> {player.team}
                  </p>
                  <p>
                    <strong>Points:</strong> {player.points}
                  </p>
                  <p>
                    <strong>Age:</strong> {player.age} years
                  </p>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3">
                  <div className="mt-2">
                    <a
                      href={`/admin-players-update/${player.id}`}
                      className="text-red-500 hover:underline"
                    >
                      Update Player
                    </a>
                  </div>
                  <div className="mt-2">
                    <a
                      href={`/delete-player/${player.id}`}
                      className="text-red-500 hover:underline"
                    >
                      Delete Player
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="mt-6">
            <a
              href="/admin-players-create"
              className="text-red-500  hover:underline"
            >
              Create Player
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
