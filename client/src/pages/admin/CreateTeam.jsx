import React, { useState } from "react";
import Navigation from "./components/Nav";
export default function CreateTeam() {
  const [name, setName] = useState();
  const [checkboxValues, setCheckboxValues] = useState({}); // Use an object to store checkbox values

  // Handle the checkbox change event
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxValues({
      ...checkboxValues,
      [name]: checked, // Update the value in the object
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/admin-players-create", {
        name,
        
      })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));

  };
  return (
    <div>
      <Navigation />
      <div className="container m-auto mt-5 bg-red-100 p-4 rounded-lg text-gray-800">
        <h1 className="text-2xl font-bold text-red-500 mb-4">Create Team</h1>
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
                className="w-full p-2 border rounded"
                placeholder="Team Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="col-span-2">
              <label htmlFor="players" className="block font-medium">
                Select Players
              </label>
              <input name="Player 1" className="mx-2" type="checkbox" onChange={handleCheckboxChange}/>
              Player 1
              <input name="Player 2" className="mx-2" type="checkbox" onChange={handleCheckboxChange}/>
              Player 2
              <input name="Player 3" className="mx-2" type="checkbox" onChange={handleCheckboxChange}/>
              Player 3
              <input name="Player 4" className="mx-2" type="checkbox" onChange={handleCheckboxChange}/>
              Player 4
              <input name="Player 5" className="mx-2" type="checkbox" onChange={handleCheckboxChange}/>
              Player 5
            </div>
          </div>
          <button className="w-full mt-4 bg-red-500 text-white p-2 rounded hover:bg-red-600">
            Create Team
          </button>
        </form>
      </div>
    </div>
  );
}
