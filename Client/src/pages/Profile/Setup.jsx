import React, { useEffect, useState,useRef } from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import axios from 'axios';
import Completeprofile from '../../assets/Completeprofile.png'
import Dropdown from '../../components/Dropdown';
import Header1 from '../../components/Headers/Header1';

export default function Setup() {
    const [about,setAbout]=useState("");
    const [location, setLocation] = useState("");
    const [occupation, setOccupation] = useState("");
    const [locations, setLocations] = useState([
        { name: "New Delhi, Delhi" },
        { name: "Mumbai, Maharashtra" },
        { name: "Bangalore, Karnataka" },
        { name: "Chennai, Tamil Nadu" },
        { name: "Kolkata, West Bengal" },
        { name: "Hyderabad, Telangana" },
        { name: "Pune, Maharashtra" },
        { name: "Jaipur, Rajasthan" },
        { name: "Ahmedabad, Gujarat" },
        { name: "Lucknowe, Uttar Pradesh" }
      ]);

      const [occupations, setOccupations] = useState([
        { name: "Software Developer" },
        { name: "Student" },
        { name: "Doctor" },
        { name: "Teacher" },
        { name: "Engineer" },
        { name: "Accountant" },
        { name: "Nurse" },
        { name: "Lawyer" },
        { name: "Chef" },
        { name: "Artist" },
        { name: "Electrician" },
      ]);
      

    useEffect(() => {
        // Fetch locations from the API using Axios
        const getLocations=async()=>{
            try{
                const headers= {
                      'X-CSCAPI-KEY': 'API_KEY'
                    }
                const response=await axios.get('https://api.countrystatecity.in/v1/states',{headers});
                console.log(response);

            }
            catch(e){
                console.log(e)
            }
        } 
        getLocations();
    }, []);

  return (
    <div className='min-h-screen flex flex-col'>
        <Header1 />
    <div className=' bg-[#F3F4F1] selection:bg-[#FDF2C3] px-[5%] py-12 flex md:flex-row flex-col justify-between'>
       <div className='md:w-[55%] flex flex-col gap-12'>
            <div>
              <p className='text-[#0c0c0c] text-4xl font-semibold'>Complete your Profile</p>
              <p className='text-[#0c0c0cc4] text-sm mt-3'>These details helps for the community to know more about you</p>
              <button className='w-fit text-[#8039C5] mt-9 flex items-center gap-2'>Skip this Step <FaArrowRightLong className='mt-1' /> </button>
            </div>
            <div>
                <label for="about" class="block text-md text-[#0C0C0C]">Tell us about yourself <span className='text-[#0c0c0c98]' >(Optional)</span></label>
                <div class="mt-3 ">
                  <textarea rows="5" name="about" value={about} onChange={(e) => setAbout(e.target.value)} className=" w-full resize-none rounded-md border-0 px-4 py-3 outline-none text-[#0c0c0cbe] ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 " placeholder="Enter here.." ></textarea>
                </div>
            </div>
            <div className='grid lg:flex sm:grid-cols-2 grid-cols-1 gap-5'>
                <div className=''>
                    <label for="location" class="block text-md text-[#0C0C0C]">Location <span className='text-[#0c0c0c98]' >(Optional)</span></label>
                    <div class="mt-3">
                        <Dropdown current={location} setCurrent={setLocation} items={locations}  />
                    
                    </div>
                </div>
                <div className=''>
                    <label for="profession" class="block text-md text-[#0C0C0C]">Profession <span className='text-[#0c0c0c98]' >(Optional)</span></label>
                    <div class="mt-3">
                        <Dropdown current={occupation} setCurrent={setOccupation} items={occupations} />
                    
                    </div>
                </div>
            </div>
            <div>
                <label for="interests" class="block text-md text-[#0C0C0C]">Pick your interests <span className='text-[#0c0c0c98]' >(Optional)</span></label>
                <div class="mt-3 ">
                  <input name="interests" value={about} onChange={(e) => setAbout(e.target.value)} className=" w-full resize-none rounded-md border-0 px-4 py-3 outline-none text-[#0c0c0cbe] ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 " placeholder="Enter here.." />
                </div>
            </div>
            <div className='flex sm:flex-row flex-col-reverse gap-4 mt-4'>
                <button className=' text-[#0c0c0c] min-w-fit py-3 px-6 rounded-md border-2 border-[#0c0c0c8b] hover:bg-[#ffffff9a] '>Clear All</button>
                <button className='bg-[#8039C5] text-white min-w-fit py-3 px-6 rounded-md hover:bg-[#7f39c5df] '>Save your Profile</button>
            </div>
       </div>
       <div className='md:w-2/5 w-4/5 mx-auto md:mx-0 flex justify-center items-center'>
        <img src={Completeprofile} alt="Complete your profile" />
       </div>
    </div>
    </div>
  )
}
