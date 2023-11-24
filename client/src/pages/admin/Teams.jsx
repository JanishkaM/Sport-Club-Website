import React from "react";
import Navigation from "./components/Nav";
export default function Teams() {
  const teams = [
    {
      id: 1,
      name: "Team A",
      players: ["Player 1", "Player 2", "Player 3"],
    },
    {
      id: 2,
      name: "Team B",
      players: ["Player 4", "Player 5", "Player 6"],
    },
    {
      id: 3,
      name: "Team C",
      players: ["Player 7", "Player 8", "Player 9"],
    },
    // Add more team objects here
  ];
  return (
    <div>
      <Navigation />
      <div className="container m-auto mt-5 bg-red-100 p-4 rounded-lg text-gray-800">
        <h1 className="text-2xl font-bold text-red-500 mb-4">Team Details</h1>
        {teams.map((team) => (
          <div
            key={team.id}
            className="mt-6 p-4 border border-gray-300 rounded-lg shadow-md"
          >
            <p className="text-xl font-semibold mb-2">{team.name}</p>
            <div>
              <p>
                <strong>Players:</strong>
              </p>
              <ul>
                {team.players.map((player, index) => (
                  <li key={index}>{player}</li>
                ))}
              </ul>
            </div>
            <div className="mt-2">
              <a
                href={`/admin-team-update/${team.id}`}
                className="text-red-500 hover:underline"
              >
                Update Team
              </a>
            </div>
            <div className="mt-2">
              <a
                href={`/delete-team/${team.id}`}
                className="text-red-500 hover:underline"
              >
                Delete Team
              </a>
            </div>
          </div>
        ))}
        <div className="mt-6">
          <a href="/admin-team-create" className="text-red-500 hover:underline">
            Create Team
          </a>
        </div>
      </div>
    </div>
  );
}
