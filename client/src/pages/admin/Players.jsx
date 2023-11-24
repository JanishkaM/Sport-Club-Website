import React from 'react'
import Navigation from './components/Nav'

const players = [
  {
    id: 1,
    name: 'John Doe',
    address: '123 Main St',
    contact: '555-555-5555',
    email: 'johndoe@example.com',
    team: 'Red Team',
    points: 100,
    position: 'Forward',
    height: "6'2\"",
    weight: '185 lbs',
    age: 27,
  },
  {
    id: 2,
    name: 'Alice Smith',
    address: '456 Elm St',
    contact: '555-555-1234',
    email: 'alicesmith@example.com',
    team: 'Blue Team',
    points: 85,
    position: 'Guard',
    height: "5'10\"",
    weight: '160 lbs',
    age: 24,
  },
  // Add more player objects here
];

export default function Players() {
  return (
    <div>
      <Navigation />
      <div className="bg-red-100 container m-auto mt-6 p-4 rounded-lg text-gray-800">
      <h1 className="text-2xl font-bold text-red-500 mb-4">Player Details</h1>
      {players.map((player) => (
        <div key={player.id} className="mt-6 p-4 border border-gray-300 rounded-lg shadow-md">
          <p className="text-xl font-semibold mb-2">{player.name}</p>
          <div className="flex flex-wrap">
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
              <p><strong>Address:</strong> {player.address}</p>
              <p><strong>Contact:</strong> {player.contact}</p>
              <p><strong>Email:</strong> {player.email}</p>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
              <p><strong>Team:</strong> {player.team}</p>
              <p><strong>Points:</strong> {player.points}</p>
              <p><strong>Position:</strong> {player.position}</p>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
              <p><strong>Height:</strong> {player.height}</p>
              <p><strong>Weight:</strong> {player.weight}</p>
              <p><strong>Age:</strong> {player.age} years</p>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
              <div className="mt-2">
                <a href={`/admin-players-update/${player.id}`} className="text-red-500 hover:underline">Update Player</a>
              </div>
              <div className="mt-2">
                <a href={`/delete-player/${player.id}`} className="text-red-500 hover:underline">Delete Player</a>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="mt-6">
        <a href="/admin-players-create" className="text-red-500  hover:underline">Create Player</a>
      </div>
    </div>
    </div>
  )
}
