import React from 'react'
import Logo from "../../assets/Logo.png"

export default function Header2() {
  return (
    <div className=' bg-white py-3 sm:px-10 px-5 shadow selection:bg-transparent fixed w-full flex flex-row justify-between items-center z-20'>
       <img draggable="false" src={Logo} alt="NexuSphere" className='h-12 cursor-pointer ' />
    </div>
  )
}
