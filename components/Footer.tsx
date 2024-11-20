import Image from "next/image";
import React from "react";
import { FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { RxCaretDown } from "react-icons/rx";

function Footer() {
  return (
    <div className="h-[60vh] flex justify-center flex-col  bg-[#043873]  text-white">
      <div className="px-24">
        <ul className="flex justify-center items-center gap-24 p-10">
          <li className="">
            <div className="flex  ">
              <span>
                <Image
                  src="/Group.png"
                  alt="white logo"
                  className="mt-1"
                  width={20}
                  height={20}
                />
              </span>
              <h1 className="font-semibold text-lg ml-3"> whitepace</h1>
            </div>
            <p className="text-xs text-left w-[150px] mt-5">
              whitepace was created for the new ways we live and work. We make a
              better workspace around the world
            </p>
          </li>
          <li>
            <ul className="gap-3 flex flex-col ">
              <li>
                <h1 className="font-semibold text-lg text-left">Product</h1>
              </li>
              <li>
                <p className="text-xs text-left">Overview</p>
              </li>
              <li>
                <p className="text-xs text-left">Pricing</p>
              </li>
              <li>
                <p className="text-xs text-left">Customer stories</p>
              </li>
            </ul>
          </li>
          <li>
            <ul className="gap-3 flex flex-col ">
              <li>
                <h1 className="font-semibold text-lg text-left">Resources</h1>
              </li>
              <li>
                <p className="text-xs text-left">Blog</p>
              </li>
              <li>
                <p className="text-xs text-left">Guides & tutorials</p>
              </li>
              <li>
                <p className="text-xs text-left">Help center</p>
              </li>
            </ul>
          </li>
          <li>
            <ul className="gap-3 flex flex-col ">
              <li>
                <h1 className="font-semibold text-lg text-left">Company</h1>
              </li>
              <li>
                <p className="text-xs text-left">About us</p>
              </li>
              <li>
                <p className="text-xs text-left">Careers</p>
              </li>
              <li>
                <p className="text-xs text-left">Media Kit</p>
              </li>
            </ul>
          </li>

          <li>
            <ul className="gap-2 flex flex-col  ">
              <li>
                <h1 className="font-bold text-xl text-left">Try it Today</h1>
              </li>

              <li>
                <p className="text-xs text-left">
                  Get started for free. Add your whole team as your needs grow
                </p>
              </li>
              <li>
                <button className="py-2 px-2 bg-[#4F9CF9] text-[white] rounded-[8px] w-[150px] flex  ">
                  Start Today <GoArrowRight className="my-1 ml-2" />
                </button>
              </li>
            </ul>
          </li>
        </ul>
        <div className=" border-[#2E4E73] w-[100%]  border-t-2 "></div>
      </div>
      <div className="flex justify-between px-28 ">
        <ul className="flex gap-x-6 mt-7">
          <li className="flex">
            <span>
              <RxCaretDown className="mt-1" />{" "}
            </span>{" "}
            English
          </li>
          <li>Terms & privacy</li>
          <li>Security</li>
          <li>Status</li>
          <li>&copy; 2021 Whitespace LLC.</li>
        </ul>

        <div className="flex gap-x-3 items-center  mt-7">
          <FaFacebookF className="h-[15px] w-[20px]" />
          <FaTwitter className="h-[15px] w-[20px]" />
          <FaLinkedin className="h-[15px] w-[20px]" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
