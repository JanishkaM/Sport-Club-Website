import React from "react";
import Navigation from "../components/Nav";

export default function Profile() {
  return (
    <div>
      <Navigation />
      <h1 className="px-6 capitalize text-3xl text-center py-4 font-bold text-blue-900">
        All Teams
      </h1>

      <div className="container grid grid-cols-1 md:grid-cols-3 m-auto">
        {/* One Section */}
        <div className="text-xl bg-blue-500 text-white rounded-lg hover:bg-blue-600 m-4 p-7">
          <h2 className="font-bold">Team Name</h2>
          <h3 className="font-semibold pb-3">Gold Team</h3>

          <h2 className="font-bold">Place</h2>
          <h3 className="font-semibold pb-3">Colombo</h3>

          <h2 className="font-bold">Members</h2>
          <h3 className="font-semibold">Jhon Wikk William</h3>
          <h3 className="font-semibold">Jhon Wikk William</h3>
          <h3 className="font-semibold">Jhon Wikk William</h3>
          <h3 className="font-semibold">Jhon Wikk William</h3>
        </div>
        {/* Section End */}
      </div>
    </div>
  );
}
