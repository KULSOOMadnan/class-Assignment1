import Image from "next/image";
import React from "react";
import circle from "/WorkTo.png";
import { GoArrowRight } from "react-icons/go";

function WorkTogether() {
  return (
    <div className="h-[90vh] w-full grid grid-cols-2 top-2 px-28 pb-28 bg-white justify-center ">
      <div className="col-span-1 flex justify-center items-center">
        <Image
          src="/WorkTo.png"
          alt="circle with color"
          width={400}
          height={400}
        />
        {/* <div className="bg-[#C4DEFD] h-[400px] w-[700px] "></div> */}
      </div>
      <div className="col-span-1 flex items-center justify-center pl-[32px]">
        <div className="flex text-white flex-col w-[400px] gap-y-6">
          <h1 className="text-4xl font-bold leading-[45px] tracking-[-1%] text-[#212529] ">
            Work Together
          </h1>
          {/* <Image src='/Landing/Element.png' width={200} height={65} ></Image> */}
          <p className="text-[12px] leading-5 font-normal text-[#212529] w-[400px] text-">
            Images, videos, PDFs and audio files are supported. Create math
            expressions and diagrams directly from the app. Take photos with the
            mobile app and save them to a note.
          </p>
          <button className="py-4 px-4 bg-[#4F9CF9] text-[white] rounded-[8px] w-[140px] flex mt-10 ">
            Get Started
            <GoArrowRight className="my-1 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default WorkTogether;
