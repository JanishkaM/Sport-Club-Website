import React, { useState } from "react";
import Navigation from "./components/Nav";
import axios from "axios";

export default function Players() {
  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [contact, setContact] = useState();
  const [email, setEmail] = useState();
  const [team, setTeam] = useState();
  const [points, setPoints] = useState();
  const [age, setAge] = useState();

  const Submit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3001/admin-players-create", {
        name,
        address,
        contact,
        email,
        team,
        points,
        age,
      })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };
  return (
    <div className="flex">
      <Navigation />

      <main className="flex-1 ml-64 p-8">
        <div className="bg-red-100 container m-auto mt-6 p-4 rounded-lg text-gray-800">
          <h1 className="text-2xl font-bold text-red-500 mb-4">
            Create Player
          </h1>
          <form
            onSubmit={Submit}
            className="p-4 border border-gray-300 rounded-lg shadow-md"
          >
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
                  onChange={(e) => setName(e.target.value)}
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
                  onChange={(e) => setAddress(e.target.value)}
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
                  onChange={(e) => setContact(e.target.value)}
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
                  onChange={(e) => setEmail(e.target.value)}
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
                  onChange={(e) => setTeam(e.target.value)}
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label htmlFor="age" className="block font-medium">
                  Age
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  className="w-full p-2 border rounded"
                  placeholder="Age"
                  onChange={(e) => setAge(e.target.value)}
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
                  onChange={(e) => setPoints(e.target.value)}
                />
              </div>
            </div>
            <button className="w-full mt-4 bg-red-500 text-white p-2 rounded hover:bg-red-600">
              Create Player
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
