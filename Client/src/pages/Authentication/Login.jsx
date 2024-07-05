import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Header1 from '../../components/Headers/Header1';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate();

  const handleLogin = () => {
    if (!email || !password) {
      toast.error('Please enter both email and password.');
      return;
    }

    console.log('Logging in with:', email, password);
    toast.success('Login Successfull!');
    console.log('Navigating to home page');
  };

  return (
    <div className='min-h-screen flex flex-col'>
    <Header1 />
    <div className='bg-[#F3F4F1] flex-1 flex justify-center items-center selection:bg-[#FDF2C3]'>
        <div className='bg-white sm:p-9 py-9 px-6 rounded-lg flex flex-col gap-6 sm:w-[400px] w-[94%]  shadow-sm'>
            <div>
                <p className='text-2xl text-[#8039C5] font-semibold'>Login</p>
                <p className='text-sm text-[#0c0c0c98] mt-1'>Enter your login details please</p>
            </div>
            <div>
                <label for="username" class="block text-md  text-[#0C0C0C]">Email</label>
                <div class="mt-2 rounded-md shadow-sm">
                    <input type="text" name="username" value={email} onChange={(e) => setEmail(e.target.value)} class="block w-full rounded-md border-0 px-4 py-3 outline-none text-[#0c0c0cbe] ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset hover:ring-[#8039C5]" placeholder="you@example.com" />
                </div>
            </div>
            <div>
                <label for="price" class="block text-md  text-[#0C0C0C]">Password</label>
                <div class="mt-2 rounded-md shadow-sm">
                    <input type="text" name="password" value={password} onChange={(e) => setPassword(e.target.value)} class="block w-full rounded-md border-0 px-4 py-3 outline-none text-[#0c0c0cbe] ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset hover:ring-[#8039C5]" placeholder="nexusphere123" />
                </div>
            </div>
            <div>
                <button onClick={handleLogin} className='w-full text-[#F3F4F1] bg-[#8039C5] rounded-md py-3 hover:bg-[#7f39c5e9]'>Login</button>
            </div>
            <div className='text-center'>
                <p className='text-[#0c0c0cc4] text-sm'>Not an existing member? <span><a className='text-[#8039C5] font-medium underline underline-offset-2 cursor-pointer' onClick={()=>navigate("/register")} >Register</a></span></p>
            </div>
        </div>
        <Toaster
            position="top-center"
            reverseOrder={true}
        />
    </div>
    </div>
  )
}
