import React from "react";
import { BiChevronDown, BiSearch, BiMenu } from "react-icons/bi";
import { Link } from "react-router-dom";

function NavSm() {
  return (
    <>
      <div className="text-white flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold">It All Starts Here!</h3>
          <span className="text-gray-400 text-xs flex items-center cursor-pointer hover:text-white">
            Delhi-NCR <BiChevronDown />
          </span>
        </div>
        <div className="w=8 h-8">
          <button>Use App</button>
          <BiSearch className="w-50 h-50" />
        </div>
      </div>
    </>
  );
}

function NavMd() {
  return (
    <>
      <div className="w-10 h-10">
        <img
          src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
          alt="logo"
          className="w-full h-full"
        />
      </div>
      <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
        <BiSearch />
        <input
          type="search"
          className="w-full bg-transparent border-none focus:outline-none"
        />
      </div>
    </>
  );
}

function NavLg() {
  return (
    <>
      <div className="container flex mx-auto px-4 items-center justify-between">
        <div className="flex items-center w-1/2 gap-3">
          <div className="w-10 h-10">
            <img
              src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
              alt="logo"
              className="w-full h-full"
            />
          </div>
          <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
            <BiSearch />
            <input
              type="search"
              className="w-full bg-transparent border-none focus: outline-none"
              placeholder="Search for movies, events, plays, sports and activites"
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <select
            data-te-select-init
            className="border-none bg-darkBackground-700 text-gray-200 text-base flex items-center cursor-pointer hover:text-white"
          >
            <option value="1">Bangalore</option>
            <option value="2">Delhi</option>
            <option value="3">Noida</option>
            <option value="4">Gurugram</option>
            <option value="5">Kolkata</option>
            <option value="6">Goa</option>
            <option value="7">Pune</option>
            <option value="8">Nainital</option>
          </select>
          {/* <span className="text-gray-200 text-base flex items-center cursor-pointer hover:text-white">
            Nainital <BiChevronDown />
          </span> */}
          <Link
            to="/plays"
            className="text-gray-200 text-base flex items-center cursor-pointer hover:text-white"
          >
            Plays
          </Link>
          <button className="bg-red-600 text-white px-2 py-1 text-sm rounded">
            Sign In
          </button>
          <div className="w-8 h-8 text-white">
            <BiMenu className="w-full h-full" />
          </div>
        </div>
      </div>
    </>
  );
}

// Main component

const Navbar = () => {
  return (
    <>
      <nav className="bg-darkBackground-700 px-4 py-3">
        {/* Small screen navbar  */}
        <div className="md:hidden">
          <NavSm />
        </div>

        {/* Medium screen navbar  */}
        <div className="md:flex hidden  lg:hidden">
          <NavMd />
        </div>

        {/* Large screen navbar  */}
        <div className="lg:flex hidden md:hidden">
          <NavLg />
        </div>
      </nav>
    </>
  );
};
export default Navbar;
