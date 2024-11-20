import Image from "next/image";
import React from "react";
import { FaApple } from "react-icons/fa";

function Sponsers() {
  return (
    <div className="h-[50vh] flex flex-col gap-16 justify-center items-center  bg-white">
      <h1 className="font-bold text-5xl">Our Sponsers</h1>
      <div className="flex justify-between gap-24">
        
      <div>
          <Image
            src="/Apple.png"
            alt="miscrosft image"
            height={20}
            width={20}
          />
        </div>
        <div>
          <Image
            src="/Microsoft.png"
            alt="miscrosft image"
            height={100}
            width={100}
          />
        </div>
        <div className="">
          <Image
            src="/Slack.png"
            alt="miscrosft image"
            height={100}
            width={100}
          />
        </div>
        <div className="">
          <Image
            src="/Google.png"
            alt="miscrosft image"
            height={100}
            width={100}
          />
        </div>
      </div>
    </div>
  );
}

export default Sponsers;
