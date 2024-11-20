import React from "react";
import { GoArrowRight } from "react-icons/go";

function HomePage() {
  return (
    <div className="min-h-screen w-full grid grid-cols-2 top-2 px-28 py-28 bg-[#043873] justify-center ">
      <div className="col-span-1 flex items-center pl-[32px]">
        <div className="flex text-white flex-col w-[400px] gap-y-6">
          <p className="text-4xl font-bold leading-10  tracking-[-1%] text-white">
            Get More Done with whitepace
          </p>
          <p className="text-[12px] leading-5 font-normal ">
            Project management software that enables your teams to collaborate,
            plan, analyze and manage everyday tasks
          </p>
          <button className="py-4 px-6 bg-[#4F9CF9] text-[white] rounded-[8px] w-[220px] flex mt-10 ">
            Try Whitepace free <GoArrowRight className="my-1 ml-2" />
          </button>
        </div>
      </div>
      <div className="col-span-1 flex justify-center items-center">
        <div className="bg-[#C4DEFD] h-[400px] w-[700px] "></div>
      </div>
    </div>
  );
}

export default HomePage;
