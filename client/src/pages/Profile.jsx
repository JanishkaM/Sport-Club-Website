import React from "react";
import Navigation from "../components/Nav";



export default function Profile() {
  return (
    <div>
      <Navigation />
      <h1 className="px-6 capitalize text-3xl text-center py-4 font-bold text-blue-900">
        Your Profile
      </h1>

      <div className="container grid grid-cols-1 md:grid-cols-2 m-auto">
        <div className="bg-blue-500 text-white rounded-lg hover:bg-blue-600 p-6 m-4">
          <div className="flex justify-between py-5 text-xl">
            <h2 className="font-bold">Name</h2>
            <h3 className="font-semibold">Jhon Smith</h3>
          </div>
          <div className="flex justify-between py-5 text-xl">
            <h2 className="font-bold">Address</h2>
            <h3 className="font-semibold">Colombo 7</h3>
          </div>
          <div className="flex justify-between py-5 text-xl">
            <h2 className="font-bold">Contacts</h2>
            <h3 className="font-semibold">077-234-4444</h3>
          </div>
          <div className="flex justify-between py-5 text-xl">
            <h2 className="font-bold">Age</h2>
            <h3 className="font-semibold">24</h3>
          </div>
          <div className="flex justify-between py-5 text-xl">
            <h2 className="font-bold">Email Address</h2>
            <h3 className="font-semibold">jhonwilliam@gmail.com</h3>
          </div>
        </div>

        <div className="bg-blue-500 text-white rounded-lg hover:bg-blue-600 p-6 m-4">
          <div className="flex justify-between py-5 text-xl">
            <h2 className="font-bold">Points</h2>
            <h3 className="font-semibold">100</h3>
          </div>
          <div className="flex justify-between py-5 text-xl">
            <h2 className="font-bold">Team</h2>
            <h3 className="font-semibold">Gold Rangers</h3>
          </div>
        </div>

      </div>
    </div>
  );
}
