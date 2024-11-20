import Image from "next/image";
import React from "react";
import { GoArrowRight } from "react-icons/go";

function YourWork() {
  return (
    <div className="h-[65vh] grid grid-cols-5 items-center bg-[#043873]">
      <div className="text-[#A7CEFC] col-span-1 ">
        <Image src="/Group1.png" alt="" width={250} height={400} />
      </div>
      <div className="text-white flex-col  flex col-span-4 justify-center items-center">
        <h1 className="text-6xl font-bold ">Your work, everywhere you are</h1>
        <p className="text-xs w-[900px] text-center mt-5 ">
          Access your notes from your computer, phone or tablet by synchronising
          with various services, including whitepace, Dropbox and OneDrive. The
          app is available on Windows, macOS, Linux, Android and iOS. A terminal
          app is also available!
        </p>
        <button className="py-2 px-2 bg-[#4F9CF9] text-[white] rounded-[8px] w-[150px] flex mt-8  ">
          Try Tasky free <GoArrowRight className="my-1 ml-2" />
        </button>
      </div>
    </div>
  );
}

export default YourWork;
