import React from "react";
import Nav from "./components/Shared/Nav";
import Leftside from "./components/Shared/Leftside";
import Rightside from "./components/Shared/Rightside";

import bg from "./assets/bg.jpg";
import navbg1 from "./assets/bg-nav-3.png";
import { Outlet } from "react-router-dom";
export default function Layout() {
  return (
    <>
      <section
        className="overflow-y-scroll fixed w-screen h-screen mx-auto bg-cover bg-center "
        style={{
          backgroundImage: ` linear-gradient(45deg,
            rgba(0, 0, 0, 0.3),
            rgba(0, 0, 0, 0.3)), 
              url(${bg})`,
        }}
      >
        <header
          style={{
            backgroundImage: ` linear-gradient(45deg,
            rgba(0, 0, 0, 0.0),
            rgba(0, 0, 0, 0.0)), 
              url(${navbg1})`,
          }}
          className="z-20 bg-cover bg-bottom h-36  mx-auto  sticky top-0"
        >
          <Nav />
        </header>

        <main className="max-w-[1440px] mx-auto">
          <div className="w-11/12 lg:w-4/5 mx-auto ">
            <div className="flex md:gap-4">
              <div className="relative">
                <Leftside />
              </div>
              <div className="flex-1">
                <Outlet />
                {/* <Rightside /> */}
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
