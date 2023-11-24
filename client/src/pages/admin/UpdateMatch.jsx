import React from "react";
import Navigation from "./components/Nav";
export default function UpdateMatch() {
  const [matchData, setMatchData] = useState({
    name: "",
    place: "",
    date: "",
    playingTeams: "",
    isHeld: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setMatchData({
      ...matchData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission and API requests here
    console.log("Match Data:", matchData);
  };
  return (
    <div>
      <Navigation />
      <div className="container m-auto mt-5 bg-red-100 p-4 rounded-lg text-gray-800">
        <h1 className="text-2xl font-bold text-red-500 mb-4">Update Match</h1>
        <form
          onSubmit={handleSubmit}
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
                value={matchData.name}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="Match Name"
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label htmlFor="place" className="block font-medium">
                Place
              </label>
              <input
                type="text"
                id="place"
                name="place"
                value={matchData.place}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="Place"
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label htmlFor="date" className="block font-medium">
                Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={matchData.date}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label htmlFor="playingTeams" className="block font-medium">
                Playing Teams
              </label>
              <input
                type="text"
                id="playingTeams"
                name="playingTeams"
                value={matchData.playingTeams}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="Playing Teams"
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label htmlFor="isHeld" className="block font-medium">
                <input
                  type="checkbox"
                  id="isHeld"
                  name="isHeld"
                  checked={matchData.isHeld}
                  onChange={handleChange}
                />
                {" Is Held"}
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full mt-4 bg-red-500 text-white p-2 rounded hover:bg-red-600"
          >
            Update Match
          </button>
        </form>
      </div>
    </div>
  );
}
