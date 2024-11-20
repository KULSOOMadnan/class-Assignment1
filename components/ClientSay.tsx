import Image from "next/image";
import React from "react";

function ClientSay() {
  return (
    <div className="flex flex-col items-center justify-center gap-10 h-[100vh]">
      <h1 className="text-5xl  font-bold">What our Client Says</h1>
      <div className="grid items-center grid-cols-3 px-10 gap-x-12 mt-6">
        <div className="col-span-1 flex flex-col shadow-md w-[300px] h-[300px] bg-white px-5 py-4 gap-6">
          <div className="flex flex-col gap-5 px-4 py-2 border-b border-[#212529] h-[150px] w-[270px]">
            <div className="flex items-start ">
              <Image
                src="/Vector.png"
                alt="Vecotoe Image"
                width={20}
                height={20}
              />
              <Image
                src="/Vector.png"
                alt="Vecotoe Image"
                width={20}
                height={20}
                className="ml-2"
              />
            </div>
            <p className="text-xs">
              Whitepate is designed as a collaboration tool for businesses that
              is a full project management solution.
            </p>
          </div>
          <div className="flex items-center justify-center gap-8 ">
            <Image
              src="/Avater2.png"
              alt="Image of people"
              width={95}
              height={95}
              className="rounded-full"
            />
            <div className="flex flex-col items-center justify-center text-[#212529] gap-2">
              <h1 className="text-[16px] font-bold ">Oberon Shaw, MCH</h1>
              <p className="text-xs ">
                Head of Talent Acquisition, North America
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 flex flex-col shadow-md w-[300px] h-[300px] bg-[#4F9CF9] px-5 py-4 gap-6">
        <div className="flex flex-col gap-5 px-4 py-2 border-b border-white h-[150px] w-[270px] text-white">
            <div className="flex items-start ">
              <Image
                src="/Vector.png"
                alt="Vecotoe Image"
                width={20}
                height={20}
                className="filter brightness-0 invert "
              />
              <Image
                src="/Vector.png"
                alt="Vecotoe Image"
                width={20}
                height={20}
                className="ml-2 filter brightness-0 invert "
              />
            </div>
            <p className="text-xs">
              Whitepate is designed as a collaboration tool for businesses that
              is a full project management solution.
            </p>
          </div>
          <div className="flex items-center justify-center gap-8 ">
            <Image
              src="/Avater1.png"
              alt="Image of people"
              width={95}
              height={95}
              className="rounded-full "
            />
            <div className="flex flex-col items-center justify-center text-[#212529] gap-2">
              <h1 className="text-[16px] font-bold  text-[#043873]">Oberon Shaw, MCH</h1>
              <p className="text-xs text-white ">
                Head of Talent Acquisition, North America
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 flex flex-col shadow-md w-[300px] h-[300px] bg-[#4F9CF9]  px-5 py-4 gap-6">
        <div className="flex flex-col gap-5 px-4 py-2 border-b border-white h-[150px] w-[270px] text-white">
            <div className="flex items-start ">
              <Image
                src="/Vector.png"
                alt="Vecotoe Image"
                width={20}
                height={20}
                className="filter brightness-0 invert "
              />
              <Image
                src="/Vector.png"
                alt="Vecotoe Image"
                width={20}
                height={20}
                className="ml-2 filter brightness-0 invert "
              />
            </div>
            <p className="text-xs">
              Whitepate is designed as a collaboration tool for businesses that
              is a full project management solution.
            </p>
          </div>
          <div className="flex items-center justify-center gap-8 ">
            <Image
              src="/Avater.png"
              alt="Image of people"
              width={95}
              height={95}
              className="rounded-full "
            />
            <div className="flex flex-col items-center justify-center text-[#212529] gap-2">
              <h1 className="text-[16px] font-bold  text-[#043873]">Oberon Shaw, MCH</h1>
              <p className="text-xs text-white ">
                Head of Talent Acquisition, North America
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-x-1">
        <span className="w-2 h-2 rounded-full bg-[#4F9CF9]"></span>
        <span className="w-2 h-2 rounded-full bg-[#043873]"></span>
        <span className="w-2 h-2 rounded-full bg-[#4F9CF9]"></span>
      </div>
    </div>
  );
}

export default ClientSay;
