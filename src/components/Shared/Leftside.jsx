import React from "react";

export default function Leftside() {
  return (
    <>
      <div className="sticky top-[144px] backdrop-blur-[2px] shadow-lg bg-slate-800/20 w-[250px] text-white rounded-xl p-6 md:flex hidden flex-col">
        {/* <div className=" h-9">
          <h1>Find Job</h1>
          <input
            className="h-full rounded-l-3xl pl-6 border-2 border-black"
            type="text"
            placeholder="Search"
          />
          <button className="bg-red-200 h-full rounded-r-3xl  px-4 ">
            Search
          </button>
        </div> */}
        <ul className="flex flex-col gap-3">
          <li>Home</li>
          <li>pages</li>
          <li>My Application</li>
          <li>Add jobs</li>
          <li>Add jobs</li>
        </ul>
      </div>
    </>
  );
}
