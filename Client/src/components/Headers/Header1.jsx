import React from 'react'
import Logo from "../../assets/Logo.png"

export default function Header1() {
  return (
    <div className='bg-[#F3F4F1] py-5 sm:px-10 px-4 shadow-md selection:bg-transparent'>
       <img draggable="false" src={Logo} alt="NexuSphere" className='h-12 cursor-pointer ' />
    </div>
  )
}
