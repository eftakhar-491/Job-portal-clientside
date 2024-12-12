import React, { useState } from "react";

export default function ApplyJobModal({ setApplyModal }) {
  return (
    <>
      <section className="flex items-center justify-center w-screen h-screen fixed text-white z-50 backdrop-blur-sm top-0 left-0">
        <div className="w-11/12 mx-auto md:max-w-[550px] border-2 p-4 rounded-md backdrop-blur-lg shadow-2xl bg-black/30">
          <h1 className="text-center font-bold text-xl">Your Information</h1>
          <form className=" flex flex-col">
            <label className="mb-4 flex flex-col gap-1">
              Full Name :{" "}
              <input
                className="placeholder:text-sm text-sm bg-transparent border-b-2 outline-none focus:border-b-blue-400"
                type="text"
                placeholder="Mahmuda Hossine"
              />
            </label>
            <label className="mb-4 flex flex-col gap-1">
              Email :{" "}
              <input
                className="placeholder:text-sm text-sm bg-transparent border-b-2 outline-none focus:border-b-blue-400"
                type="text"
                placeholder="exaple@.com"
              />
            </label>
            <label className="mb-4 flex flex-col gap-1">
              Social Media :{" "}
              <input
                className="placeholder:text-sm text-sm bg-transparent border-b-2 outline-none focus:border-b-blue-400"
                type="text"
                placeholder="Linkdin profile Link"
              />
            </label>
            <label className="mt-3">
              Upload your CV :{" "}
              <input
                className=" text-sm border rounded-lg"
                accept="application/pdf"
                type="file"
                required
              />
            </label>
            <button
              type="submit"
              className="w-full bg-slate-500/30  py-1 mt-5 rounded-lg"
            >
              Apply Now
            </button>
            <div
              onClick={() => setApplyModal(false)}
              className="text-center w-full bg-slate-500/30  py-1 mt-3 cursor-pointer rounded-lg"
            >
              {" "}
              Cancel
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
