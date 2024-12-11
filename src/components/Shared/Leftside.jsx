import React, { useContext } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { StateContext } from "../../Context/StateContext";

export default function Leftside() {
  const { pathname } = useLocation();

  return (
    <>
      <div className="sticky top-[144px] backdrop-blur-[2px] shadow-lg bg-slate-800/20 w-[250px] text-white rounded-xl p-6 md:flex hidden flex-col">
        <div className=" h-9 flex border-2 pr-1 rounded-lg">
          <input
            className="w-11/12 text-sm outline-none pl-2 bg-transparent"
            type="text"
            placeholder="Search"
          />
          <button className=" ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </div>
        <div className="flex justify-evenly gap-2 mt-3 ">
          <Link
            to={"/register"}
            className="w-full border rounded-md py-1 hover:backdrop-blur-md hover:bg-slate-500/20 active:scale-95"
          >
            <button className="w-full"> Register</button>
          </Link>
          <Link
            to={"/login"}
            className="w-full border rounded-md py-1 hover:backdrop-blur-md hover:bg-slate-500/20 active:scale-95"
          >
            <button className="w-full"> Log In</button>
          </Link>
        </div>
        <div className="flex flex-col gap-3 mt-4">
          <NavLink
            to={"/"}
            className={({ isActive }) => {
              return isActive
                ? "flex border-2 justify-between pr-2 py-1/2 rounded-md pl-2 hover:backdrop-blur-md active:scale-95 hover:bg-slate-500/20"
                : "flex justify-between pr-2 py-1/2 border-0";
            }}
          >
            <div>Home</div>
            <div className="">
              {pathname === "/" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                  />
                </svg>
              )}
            </div>
          </NavLink>
          <NavLink
            to={"/find-jobs"}
            className={({ isActive }) => {
              return isActive
                ? "flex justify-between pr-2 border-2 py-1/2 rounded-md pl-2 hover:backdrop-blur-md active:scale-95 hover:bg-slate-500/20"
                : ` flex justify-between pr-2 py-1/2`;
            }}
          >
            <div>Find Jobs</div>
            <div className="">
              {pathname === "/find-jobs" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                  />
                </svg>
              )}
            </div>
          </NavLink>

          <li>pages</li>
          <li>My Application</li>
          <li>Add jobs</li>
          <li>Add jobs</li>
        </div>
      </div>
    </>
  );
}
