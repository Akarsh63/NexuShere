import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Signup from '../../assets/Signup.png';
import { CiCamera } from "react-icons/ci";
import toast, { Toaster } from 'react-hot-toast';
import Dropdown from '../../components/Dropdown';
import Header1 from '../../components/Headers/Header1';

export default function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [gender,setGender]=useState("");
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const imageInputRef = useRef(null);
  const [ profile_url, setUrl ] = useState("https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80");
  const [uploadloading,setUploadLoading]=useState(false);
  const navigate = useNavigate();
  const genderOpts=[{"name":"Male"},{"name":"Female"},{"name":"Other"}];

  const handleButtonClick = () => {
    imageInputRef.current.click();
  };

  const uploadImage = (file) => {
    if(!file) return
    // console.log(file);
    setUploadLoading(true);
    const data = new FormData()
    data.append("file", file)
    data.append("upload_preset", "skitzngk")
    data.append("cloud_name","dixct5evr")
    fetch("https://api.cloudinary.com/v1_1/dixct5evr/image/upload",{
    method:"post",
    body: data
    })
    .then(resp =>resp.json())
    .then(body => {
    // console.log(body)
    if(body.url){
    setUrl(body.url.toString())
    setUploadLoading(false);}
    })
    .catch(err => {setUploadLoading(false);console.log(err);toast.error("Error Ocuured, Try again.")})
    }

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    uploadImage(file);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !password || !confirmPassword || !gender) {
      toast.error('Please fill all the required fields');
      return;
    }
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    console.log('Registering with:', { firstName, lastName, email, password, gender });

    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setGender('')

    navigate('/setup-profile');
  };

  return (
    <div className='min-h-screen'>
      <Header1 />
    <div className='flex md:flex-row flex-col  sm:px-[5%] bg-[#F3F4F1] selection:bg-[#FDF2C3]'>
        <div className='md:w-[60%] '>
          <div className='lg:w-3/4 w-5/6 mx-auto flex flex-col gap-12 py-12'>
            <div>
              <p className='text-[#0c0c0c] text-4xl font-semibold'>New account</p>
              <p className='text-[#0c0c0cc4] text-sm mt-3'>Already have an account? <span><a className='text-[#8039C5] font-medium underline underline-offset-2 cursor-pointer' onClick={()=>navigate("/")} >Login</a></span></p>
            </div>
            
            <form className='flex flex-col gap-7' onSubmit={handleRegister} >
            <div className=''>
                 <label for="profile_photo" class="block text-md  text-[#0C0C0C]">Profile Image <span className='text-[#0c0c0c98]' >(Optional)</span></label>
                 <div className='text-center relative'>
                    <img class="inline-block w-40 h-40 mt-3 rounded-full ring-2 ring-white object-cover" src={profile_url} alt="" />
                    {
                      uploadloading && 
                      <span className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 loading loading-spinner loading-lg"></span>
                    }
                    <div className='absolute top-[75%] left-[54%]'>
                      <button onClick={handleButtonClick} type='button' className='bg-[#0C0C0C] hover:bg-[#0c0c0cf1] rounded-full p-3'><CiCamera className='text-white text-xl' /></button>
                      <input
                            type="file"
                            id="fileInput"
                            ref={imageInputRef}
                            accept="image/*"
                            style={{ display: 'none' }}
                            onChange={handleFileChange}
                        />
                    </div>
                    {
                      //  <Circle className=" h-0 w-0" />
                    }
                 </div>
              </div>
              
                      <div className='flex flex-row w-full sm:gap-5 gap-2'>
                  
                  <div className='w-[48%]'>
                      <label for="price" class="block text-md  text-[#0C0C0C]">First Name<span className='text-red-600'>*</span></label>
                      <div class="mt-2 rounded-md shadow-sm">
                          <input type="text" name="first_name" value={firstName} onChange={(e) => setFirstName(e.target.value)} class="block w-full rounded-md border-0 px-4 py-3 outline-none text-[#0c0c0cbe] ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset hover:ring-gray-900" placeholder="John" />
                      </div>
                  </div>
                  <div  className='w-[48%]'>
                      <label for="price" class="block text-md  text-[#0C0C0C]">Last Name<span className='text-red-600'>*</span></label>
                      <div class="mt-2 rounded-md shadow-sm">
                          <input type="text" name="last_name" value={lastName} onChange={(e) => setLastName(e.target.value)} class="block w-full rounded-md border-0 px-4 py-3 outline-none text-[#0c0c0cbe] ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset hover:ring-gray-900" placeholder="Doe" />
                      </div>
                  </div>
                </div>
                 <div className='flex flex-row w-full sm:gap-5 gap-2'>
                <div className='w-[48%]'>
                      <label for="price" class="block text-md  text-[#0C0C0C]">Email<span className='text-red-600'>*</span></label>
                      <div class="mt-2 rounded-md shadow-sm">
                          <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} class="block w-full rounded-md border-0 px-4 py-3 outline-none text-[#0c0c0cbe] ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset hover:ring-gray-900" placeholder="you@example.com" />
                      </div>
                  </div>
                  <div className='w-[48%]'>
                      <label for="price" class="block text-md  text-[#0C0C0C]">Gender<span className='text-red-600'>*</span></label>
                      <div class="mt-2 rounded-md shadow-sm">
                          <Dropdown current={gender} setCurrent={setGender} items={genderOpts}/>
                      </div>
                  </div>
                 </div>
                  <div className='lg:w-3/5'>
                      <label for="price" class="block text-md  text-[#0C0C0C]">Password<span className='text-red-600'>*</span></label>
                      <div class="mt-2 rounded-md shadow-sm">
                          <input type="text" name="password" value={password} onChange={(e) => setPassword(e.target.value)} class="block w-full rounded-md border-0 px-4 py-3 outline-none text-[#0c0c0cbe] ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset hover:ring-gray-900" placeholder="Nexusphere@123" />
                      </div>
                  </div>
                  <div className='lg:w-3/5'>
                      <label for="price" class="block text-md text-[#0C0C0C]">Confirm Password<span className='text-red-600'>*</span></label>
                      <div class="mt-2 rounded-md shadow-sm">
                          <input type="text" name="confirm_password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} class="block w-full rounded-md border-0 px-4 py-3 outline-none text-[#0c0c0cbe] ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset hover:ring-gray-900" placeholder="Nexusphere@123" />
                      </div>
                  </div>
              <div className='mt-5'>
                <button type="submit" className='min-w-[140px] lg:w-3/5 w-full bg-[#8039C5] hover:bg-[#7f39c5df] text-white p-3 rounded-md'>Create Account</button>
              
            </div>
              </form>
          </div>
        </div>
        <div className='md:w-[40%] w-5/6 flex justify-center items-center mx-auto md:mx-0 '>
           <img src={Signup} alt="Join us" />
        </div>

        <Toaster
            position="top-center"
            reverseOrder={true}
        />
    </div>
    </div>
  )
}
