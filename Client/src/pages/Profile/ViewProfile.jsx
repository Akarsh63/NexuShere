import React, { useRef, useState } from 'react';
import Header2 from '../../components/Headers/Header2';
import Banner from '../../assets/Banner.jpg'
import { RiEditFill } from "react-icons/ri";
import { MdOutlineWorkOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

const ViewProfile = () => {
  const [profileDetails,setProfileDetails]=useState({
    "profile_url":"https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  });
  const imageInputRef = useRef(null);
  const [uploadloading,setUploadLoading]=useState(false);

  const handleButtonClick = () => {
    imageInputRef.current.click();
  };

  const handleFileChange = (event) => {
      const file = event.target.files[0];
      // uploadImage(file);
    };

  return (
    <div className='min-h-screen flex flex-col'>
      <Header2 />
      <div className='bg-[#F3F4F1] w-full flex justify-center flex-1 mt-16 pt-12 pb-2'>
        <div  className='w-2/3 mx-auto bg-white rounded-md shadow-md flex flex-col'>
             <div className='relative w-full'>
                <img src={Banner} alt ="background-img" className='h-56 w-full object-cover rounded-t-md' />
                <div className='absolute top-1/2 left-9'>
                    <div className='relative'>
                        <img class="inline-block w-36 h-36 mt-3 rounded-full ring-2 ring-white object-cover" src={profileDetails.profile_url} alt="" />
                        <div className='absolute top-[72%] left-[74%]'>
                          <button onClick={handleButtonClick} type='button' className='bg-[#0C0C0C] hover:bg-[#0c0c0cf1] rounded-full p-2'><RiEditFill className='text-white text-xl' /></button>
                          <input
                                type="file"
                                id="fileInput"
                                ref={imageInputRef}
                                accept="image/*"
                                style={{ display: 'none' }}
                                onChange={handleFileChange}
                            />
                        </div>
                    </div>
                </div>
             </div>
             <div className='mt-16 px-9 py-6'>
               <div className='flex flex-col gap-1'>
                <p className='font-medium text-xl '>Rankireddy Sani Mani Akarsh <span className='text-[#0c0c0c98] text-sm font-normal'>(Male)</span></p>
                <div className='flex items-center'>
                  <MdOutlineWorkOutline className='mr-2' />
                  <span>Student</span>
                </div>
                <div className='flex items-center'>
                  <IoLocationOutline className='mr-2' />
                  <span>Bangalore, India</span>
                </div>
                <div>
                  
                </div>
               </div>
             </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;
