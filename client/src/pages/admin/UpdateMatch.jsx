import React from "react";
import Navigation from "./components/Nav";
export default function UpdateMatch() {
  const [matchData, setMatchData] = useState({
    name: "",
    place: "",
    date: "",
    playingTeams: "",
    isHeld: true,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission and API requests here
    console.log("Match Data:", matchData);
  };
  return (
    <div className="flex">
      <Navigation />
      <main className="flex-1 ml-64 p-8">
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
                <label htmlFor="isHeld" className="block font-medium">Is held</label>
                <select
                  id="isHeld"
                  name="isHeld"
                  value={matchData.isHeld}
                  onChange={handleChange}
                  className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
                >
                  <option value={true}>Yes</option>
                  <option value={false}>No</option>
                </select>
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
      </main>
    </div>
  );
}
