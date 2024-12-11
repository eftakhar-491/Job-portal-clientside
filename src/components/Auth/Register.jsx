import React from "react";

export default function Register() {
  return (
    <>
      <section className="">
        <div className="">
          <form className="backdrop-blur-sm bg-slate-800/20 border py-14 mt-3 px-6 mx-auto max-w-96 rounded-lg flex flex-col justify-center items-center text-white">
            <label className="text-2xl font-bold">Register</label>
            <label className="w-full">
              <span className="text-white text-lg font">User Name</span> <br />
              <input
                className="border-b-2 mb-2 bg-transparent py-2 w-full outline-none focus:border-blue-400 pl-5  "
                type="text"
                name="email"
                placeholder="Full Name"
                required={true}
              />
            </label>
            <label className="w-full">
              <span className="text-white text-lg font">Photo URL</span> <br />
              <input
                className="border-b-2 mb-5 bg-transparent py-2 w-full outline-none focus:border-blue-400 pl-5  "
                type="text"
                name="email"
                placeholder="https://www.photo.exmple.com/a"
                required={true}
              />
            </label>
            <label className="w-full">
              <span className="text-white text-lg font">Email</span> <br />
              <input
                className="border-b-2 mb-5 bg-transparent py-2 w-full outline-none focus:border-blue-400 pl-5  "
                type="email"
                name="email"
                placeholder="Email"
                required={true}
              />
            </label>
            <label className="w-full">
              <span className="text-white text-lg font">Password</span> <br />
              <input
                required={true}
                className="border-b-2 mb-5 bg-transparent py-2 outline-none pl-5 w-full focus:border-blue-400 "
                type="Password"
                name="pass"
                placeholder="Password"
              />
            </label>
            <button className="border w-full py-1 rounded-lg active:scale-95 ">
              Create Account
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
