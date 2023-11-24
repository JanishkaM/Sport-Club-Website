import React from "react";
import Navigation from "./components/Nav";

export default function Matches() {
  const matches = [
    {
      id: 1,
      name: "Match 1",
      place: "Stadium A",
      date: "2023-12-15",
      playingTeams: "Team A vs. Team B",
      isHeld: true,
    },
    {
      id: 2,
      name: "Match 2",
      place: "Stadium B",
      date: "2023-12-20",
      playingTeams: "Team C vs. Team D",
      isHeld: false,
    },
    {
      id: 3,
      name: "Match 3",
      place: "Stadium C",
      date: "2023-12-25",
      playingTeams: "Team E vs. Team F",
      isHeld: false,
    },
    // Add more match objects here
  ];

  return (
    <div>
      <Navigation />
      <div className="container m-auto mt-5 bg-red-100 p-4 rounded-lg text-gray-800">
        <h1 className="text-2xl font-bold text-red-500 mb-4">Match Details</h1>
        {matches.map((match) => (
          <div
            key={match.id}
            className="mt-6 p-4 border border-gray-300 rounded-lg shadow-md"
          >
            <p className="text-xl font-semibold mb-2">{match.name}</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 sm:col-span-1">
                <p>
                  <strong>Place:</strong> {match.place}
                </p>
                <p>
                  <strong>Date:</strong> {match.date}
                </p>
                <p>
                  <strong>Playing Teams:</strong> {match.playingTeams}
                </p>
                <p>
                  <strong>Status:</strong> {match.isHeld ? "Held" : "Not Held"}
                </p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <div className="mt-2">
                  <a
                    href={`/admin-match-update/${match.id}`}
                    className="text-red-500 hover:underline"
                  >
                    Update Match
                  </a>
                </div>
                <div className="mt-2">
                  <a
                    href={`/delete-match/${match.id}`}
                    className="text-red-500 hover:underline"
                  >
                    Delete Match
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="mt-6">
          <a href="/admin-match-create" className="text-red-500 hover:underline">
            Create Match
          </a>
        </div>
      </div>
    </div>
  );
}
