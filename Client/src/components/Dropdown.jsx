import React, { useEffect, useRef, useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";


export default function Dropdown ({current,setCurrent,items}){
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
  
    useEffect(() => {
        const handleClickOutside = (event) => {
          if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
          }
        };
    
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, []);
    
      const handleItemClick = (item) => {
        setCurrent(item.name);
        setIsOpen(false);
      };

    return (<div ref={dropdownRef} className="relative w-full">
        <div className='flex flex-row items-center w-full rounded-md ring-1 ring-inset ring-gray-300 bg-white focus:ring-inset focus:ring-[#8039C5] cursor-pointer'  onClick={() => setIsOpen(!isOpen)}>
        <input
            // name="location"
            value={current}
            onChange={(e) => setCurrent(e.target.value)}
           
            autoComplete="off"
            className=" w-full bg-transparent px-4 py-3 border-none outline-none text-[#0c0c0cbe]  placeholder:text-gray-400 "
            placeholder="Select here"
        />
        <IoIosArrowDown className='text-lg mx-2' />
        </div>
      {isOpen && (
        <ul className="absolute mt-2 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {items
            .filter(item => 
                item.name.toLowerCase().includes(current.toLowerCase()))
            .map((item, index) => (
                <li
                key={index}
                onClick={() => handleItemClick(item)}
                className="cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-[#0000000d] hover:text-[#a566e5]"
                >
                {item.name}
                </li>
            ))}
            {items.filter(item => 
                item.name.toLowerCase().includes(current.toLowerCase())).length === 0 && (
            <li className="py-2 pl-3 text-gray-600">No result found. Type directly</li>
            )}
        </ul>
        )}

    </div>)

}
