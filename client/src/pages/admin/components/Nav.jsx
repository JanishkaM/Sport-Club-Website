// src/components/Navigation.js
import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="bg-red-500">
      <div className="flex justify-between items-center container m-auto py-4">
        <div className="logo uppercase px-6 text-4xl font-extrabold cursor-pointer text-white hover:text-red-900 focus:text-red-900">
          Admin Panel S.C
        </div>
        <ul className="flex">
          <li className="px-6 uppercase text-lg font-semibold text-white hover:text-red-900 focus:text-red-900">
            <Link to="/admin-players-view">Profiles</Link>
          </li>
          <li className="px-6 uppercase text-lg font-semibold text-white hover:text-red-900 focus:text-red-900">
            <Link to="/admin-match-view">Matches</Link>
          </li>
          <li className="px-6 uppercase text-lg font-semibold text-white hover:text-red-900 focus:text-red-900">
            <Link to="/admin-team-view">Teams</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
