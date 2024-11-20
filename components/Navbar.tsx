import Image from 'next/image';
import React from 'react'
import { GoArrowRight } from 'react-icons/go';
import { IoIosArrowDown } from "react-icons/io";
import { RxCaretDown } from "react-icons/rx";

function Navbar() {
  return (
    <nav className=' flex flex-row bg-[#043873] py-4 px-32 text-white  justify-between items-center '>
      <div className='font-semibold text-xl flex' >
      <span><Image src='/Group.png' alt="white logo"  className='mt-1' width={20} height={20} /></span>
        <p className='ml-3'>WhiteSpace</p>
      </div>
      <div className='flex items-center text-sm'>
        <ul className='flex  items-center '>
          <div className='flex ml-3'>
          <li>Products </li>
           <RxCaretDown className='mt-1 ml-3' />
          </div>
          <div className='flex ml-3'>
          <li>Solutions </li>
           <RxCaretDown className='mt-1 ml-3' />
          </div>
          <div className='flex ml-3'>
          <li>Resources </li>
           <RxCaretDown className='mt-1 ml-3' />
          </div>
          <div className='flex ml-3'>
          <li>Pricing </li>
           <RxCaretDown className='mt-1 ml-3' />
          </div>
        </ul>

          <div className='ml-8 flex gap-4'>
            <button className='py-4 px-10 bg-[#FFE492] text-[#043873] rounded-[8px]' >Login</button>
            <button className='py-4 px-6 bg-[#4F9CF9] text-[white] rounded-[8px] flex ' >Try Whitepace free <GoArrowRight className='my-1 ml-2' /></button>
          </div>
      </div>

    </nav>
  )
}

export default Navbar