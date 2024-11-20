import React from 'react'
import { GoArrowRight } from 'react-icons/go'

function UseExtension() {
  return (
    <div className='h-[75vh] w-full grid grid-cols-2 top-2 px-28 py-28 bg-[#043873] justify-center '>
        <div className='flex items-center col-span-1 pl-28'>
        <div className="flex text-white flex-col w-[400px] gap-y-6">
          <h1 className="text-4xl font-bold leading-[30px] tracking-[-2%] text-white font-[Inter] ">
          Use as Extension
          </h1>
          {/* <Image src='/Landing/Element.png' width={200} height={65} ></Image> */}
          <p className="text-[12px] leading-5 font-normal text-white w-[400px]">
          Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.

          </p>
          <button className="py-3 px-6 bg-[#4F9CF9] text-[white] rounded-[8px] w-[140px] flex mt-4 ">
            let's Go
            <GoArrowRight className="my-1 ml-2" />
          </button>
        </div>

        </div>
        <div className='flex  col-span-1 justify-center'>
        <div className="bg-[#C4DEFD] h-[250px] w-[400px] "></div>
        </div>
    </div>
  )
}

export default UseExtension