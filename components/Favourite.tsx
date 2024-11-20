import Image from 'next/image'
import React from 'react'
import { GoArrowRight } from 'react-icons/go'

function Favourite() {
  return (
    <div className="h-[90vh] w-full grid grid-cols-2 top-2 px-28 py-28 bg-[#043873] justify-center ">
        <div className="col-span-1 flex justify-center items-center">
      <Image src='/Apps.png' alt='app imag' width={400} height={400}/>
    </div>
    <div className="col-span-1 flex items-center pl-[32px]">
      <div className="flex text-white flex-col w-[400px] gap-y-6">
        <p className="text-5xl font-bold leading-tight  tracking-[-1%] text-white">Work with Your Favorite Apps Using whitepace</p>
        <p className="text-[12px] leading-5 font-normal ">Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.</p>
      <button className='py-4 px-6 bg-[#4F9CF9] text-[white] rounded-[8px] w-[220px] flex mt-10 ' >Read more <GoArrowRight className='my-1 ml-2' /></button>
      </div>
      
    </div>
    

  </div>
  )
}

export default Favourite