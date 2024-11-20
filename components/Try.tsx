import React from "react";
import { FaApple, FaWindows } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { IoLogoAndroid } from "react-icons/io";

function Try() {
  return (
    <div className="h-[79vh] flex items-center justify-center flex-col bg-[#043873] gap-7 text-center text-white">
      <h1 className="font-bold text-5xl text-white text-center -tracking-[2%]">
        Try Whitepace <br />
        today
      </h1>
      <p className="text-lg text-white">
        Get started for free. <br />
        Add your whole team as your needs grow.
      </p>
      <button className="py-2 px-2 bg-[#4F9CF9] text-[white] rounded-[8px] w-[150px] flex  ">
        Try Tasky free <GoArrowRight className="my-1 ml-2" />
      </button>
      <p className="text-lg">On a big team? Contact sales</p>
      <div className="flex items-center justify-center gap-4">
        <FaApple className="h-[50px] w-[50px]" />
        <FaWindows className="h-[50px] w-[50px]" />
        <IoLogoAndroid className="h-[50px] w-[50px]" />
      </div>
    </div>
  );
}

export default Try;
