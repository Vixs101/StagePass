// import React from 'react'

import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="fixed w-full flex justify-between items-center px-28 py-3 bg-gray-50 z-30">
      <Link to="/">
        <img src="/images/logo.png" alt="logo" />
      </Link>
      <ul className="flex items-center gap-7 py-2 font-semibold text-gray-800 text-xl">
        <li>
          <Link to="/" className="hover:border-b-2 hover:border-b-[#4bf44d]">Home</Link>
        </li>
        <li>
          <Link to="/events" className="hover:border-b-2 hover:border-b-[#4bf44d]">Events</Link>
        </li>
        <li>
          <Link to="/tickets" className="hover:border-b-2 hover:border-b-[#4bf44d]">Tickets</Link>
        </li>
        <button className="bg-gray-800 py-2 px-3 rounded-sm text-white hover:bg-gray-700">
          Login
        </button>
      </ul>
    </nav>
  );
}
