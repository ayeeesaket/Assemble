import React from "react";
import Logo from "../ui/svg/Logo";
import UpperNav from "../ui/nav/UpperNav";
import { HomeChar } from "../ui/svg/HomeChar";
import { Sidebar } from "../ui/Sidebar/Sidebar";
import Hero from "./Hero";

const Homepage = () => {
  return (
    <div className="h-[110vh] w-[100vw] overflow-x-hidden overflow-y-scroll relative no-scrollbar ">
      <div className="bg w-[100vw] h-[100vh] -z-10 bg-[#010101eb] no-scrollbar  fixed top-0 l-0">
        <img
          className="w-[100vw] h-[100vh] object-cover object-top "
          src="../../public/image.png"
          alt="img"
        />
      </div>
      <div className="z-20">
        <UpperNav />
      </div>
      <div className="z-0 ">
        <HomeChar />
      </div>
      <div className="relative flex mt-2 justify-start no-scrollbar">
        <div className="relative h-[75vh] w-[8vw]">
          <Sidebar />
        </div>
        <div className="mt-2 no-scrollbar ">
          <Hero name={'Ghostrider69'} />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
