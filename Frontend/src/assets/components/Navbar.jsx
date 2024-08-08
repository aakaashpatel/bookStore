import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const navbar = (
    <>
      <li onClick={closeDropdown}>
        <Link to="/">Home</Link>
      </li>
      <li onClick={closeDropdown}>
        <Link to="/course">Course</Link>
      </li>
      <li onClick={closeDropdown}>
        <Link to="/contact">Contact</Link>
      </li>
      <li onClick={closeDropdown}>
        <Link to="/about">About</Link>
      </li>
    </>
  );

  return (
    <>
      <div
        className={`container max-w-screen-2xl mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 ${
          sticky
            ? "sticky-navbar shadow-md bg-base-200 duration-300 transition-all ease-in-out z-50"
            : ""
        }`}
      >
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <button
                tabIndex={0}
                className="btn btn-ghost lg:hidden"
                onClick={handleDropdownToggle}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </button>
              {dropdownOpen && (
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  {navbar}
                </ul>
              )}
            </div>
            <Link to="/" className="cursor-pointer font-bold text-2xl">
              ReadBook
            </Link>
          </div>

          <div className="navbar-end flex gap-2">
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">{navbar}</ul>
            </div>
            <div className="hidden md:block">
              <label className="border p-2 rounded flex items-center gap-2">
                <input
                  type="text"
                  className="grow outline-none"
                  placeholder="Search"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
            </div>
            <div className="">
              <button
                className="bg-primary text-white btn"
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                Login
              </button>
              <Login />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[80px]">
        {" "}
        {/* Adjust the height as needed */}
        {/* Content goes here */}
      </div>
    </>
  );
};

export default Navbar;
