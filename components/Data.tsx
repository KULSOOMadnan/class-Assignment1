import Image from "next/image";
import React from "react";
import { GoArrowRight } from "react-icons/go";

function Data() {
  return (
    <div className="h-[70vh] w-full grid grid-cols-2 top-2 px-28 py-28 bg-white justify-center ">
      <div className="col-span-1 flex items-center pl-[32px]">
        <div className="flex text-white flex-col w-[400px] gap-y-6">
          <h1 className="text-4xl font-bold leading-[50px] tracking-[-2%] text-[#212529] font-[Inter] ">
            100% your Data
          </h1>
          {/* <Image src='/Landing/Element.png' width={200} height={65} ></Image> */}
          <p className="text-[12px] leading-5 font-normal text-[#212529] w-[400px]">
            The app is open source and your notes are saved to an open format,
            so you'll always have access to them. Uses End-To-End Encryption
            (E2EE) to secure your notes and ensure no-one but yourself can
            access them.
          </p>
          <button className="py-4 px-4 bg-[#4F9CF9] text-[white] rounded-[8px] w-[140px] flex mt-7 ">
            Read more
            <GoArrowRight className="my-1 ml-2" />
          </button>
        </div>
      </div>
      <div className="col-span-1 flex justify-center items-center">
        <Image src="/Element.png" alt="data imag" width={400} height={400} />
      </div>
    </div>
  );
}

export default Data;
