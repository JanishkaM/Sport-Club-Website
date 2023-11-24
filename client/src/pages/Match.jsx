import React from "react";
import Navigation from "../components/Nav";

export default function Profile() {
  return (
    <div>
      <Navigation />
      <h1 className="px-6 capitalize text-3xl text-center py-4 font-bold text-blue-900">
        All Matches
      </h1>

      <div className="container grid grid-cols-1 md:grid-cols-3 m-auto">

        <div className="text-xl bg-blue-500 text-white rounded-lg hover:bg-blue-600 m-4 p-7">
          <h2 className="font-bold">Match Name</h2>
          <h3 className="font-semibold pb-3">Free Match</h3>

          <h2 className="font-bold">Starting Date</h2>
          <h3 className="font-semibold pb-3">2023/11/02</h3>

          <h2 className="font-bold">Place</h2>
          <h3 className="font-semibold pb-3">Colombo</h3>

          <h2 className="font-bold">Stetus</h2>
          <h3 className="font-semibold pb-3">Start soon</h3>

          <h2 className="font-bold">Teams</h2>
          <h3 className="font-semibold">Team 1</h3>
          <h3 className="font-semibold">Team 2</h3>
          <h3 className="font-semibold">Team 3</h3>
          <h3 className="font-semibold">Team 4</h3>
        </div>

      </div>
    </div>
  );
}
