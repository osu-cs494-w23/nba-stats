import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function Nav() {
  return (
    <nav className="bg-rose-700 text-dark p-2 sm:p-4 md:p-12 ">
      <div className="flex place-content-center ">
        NBA STATS
        </div>
      <div className="container flex flex-col">
        <Link
          to="/"
          className="text-2xl text-blue-100">
          Player Stats
        </Link>
        <SearchBar />
        <ul className="p-2 float-right">
          <Link
              to="/Teams">
              Teams (Not complete yet)
            </Link>
         
        </ul>
      </div>
    </nav>
  );
}