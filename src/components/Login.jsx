import React from 'react';
import {Auth, Provider} from '../firebase-config'
import { signInWithPopup } from 'firebase/auth'
const Login = () => {
  const signIn = async () => {
    signInWithPopup(Auth, Provider)
    .then(res => console.log("You are logged in."))
    .catch(err => console.log(err))
  }
  return (
    <div className='text-center items-center justify-center flex flex-col'>
      
      <div className='p-5'>
        <img
          className="w-8 h-8"
          src="https://testing-red-xi.vercel.app/static/media/logo-nav.3d1d611fa171cabda657.png"
          alt="logo"
        />
      </div>

      <div className='text-[#2D333A] text-[32px] font-bold'>
        Welcome back to EntityAI
        <p className='text-[#6F7780] text-[14px] mb-2'>
          If you're new, just <a href="#" className='hover:underline hover:text-[#2D333A] duration-500'>sign up</a>
        </p>
      </div>

      <form className=''>
        <label className='relative block'>
          <input
            type="text"
            className='mt-6 cursor-pointer px-4 text-md rounded-sm border-[#2D333A] border-[1px] outline-none transition duration-200 focus:border-[#10a37f] focus:text-[#2D333A] border-opacity-50 h-14 w-96'
          />
          <span className='text-md text-[#2D333A] cursor-pointer absolute left-0 top-10 mx-6 px-2 transition duration-200 input-text text-opacity-80'>
            Email address
          </span>
        </label>

        <label className='relative block'>
          <input
            type="password"
            className='mt-6 cursor-pointer px-4 text-md rounded-sm border-[#2D333A] border-[1px] outline-none transition duration-200 focus:border-[#10a37f] focus:text-[#2D333A] border-opacity-50 h-14 w-96'
          />
          <span className='text-md text-[#2D333A] cursor-pointer absolute left-0 top-10 mx-6 px-2 transition duration-200 input-text text-opacity-80'>
            Password
          </span>
        </label>

        <button className='p-2 mt-4 text-[16px] duration-500 bg-[#10a37f] w-full rounded-sm h-14 hover:bg-[#0E9D86] text-white'>
          Login
        </button>
        <div className='mt-2 '>
        <p className='text-sm text-[#2D333A]'>Forget your password? <a href="#" className='hover:text-[#2D333A] duration-500 hover:underline underline-offset-2'>Recover</a></p>
        </div>
        
        <div className='relative mt-8'>
          <hr className='border-[#6F7780]' />
          <span className='text-[#6F7780] text-[13px] px-4 bg-white absolute top-[-10px] left-1/2 transform translate-x-[-50%]'>
            OR LOG IN WITH
          </span>
        </div>
        <div className='flex flex-col p-6'>
            <button onClick={signIn} className='border-[#6F7780] text-[#2D333A]  hover:bg-[#E5E5E5] duration-200 mb-4 rounded-sm p-2 border-[1px]'>
                Login with Github
                <img
              className='inline w-6 h-6 ml-2'
              src='https://cdn-icons-png.flaticon.com/512/25/25231.png'
              alt='GitHub Icon'
               />
                </button>
            <button className='border-[#6F7780] text-[#2D333A] hover:bg-[#E5E5E5] duration-200  rounded-sm p-2  border-[1px]'>
                Login with Google
                <img
              className='inline  w-6 h-6 ml-2'
              src='https://imagepng.org/wp-content/uploads/2019/08/google-icon-1.png'
              alt='Google Icon'
                />
            </button>
        </div>
      </form>
      <footer>
        
        <p className='text-[#2D333A] text-sm '><a href="#" className='duration-200 hover:underline hover:text-[#0E9D86]'>Home</a> · <a href="#" className='duration-200 hover:underline hover:text-[#0E9D86]'>API Docs</a> · <a className='hover:underline duration-200 hover:text-[#0E9D86]' href="#">Blog</a> · <a className='duration-200 hover:underline hover:text-[#0E9D86]' href="#">Hugging Face</a></p>
      </footer>
    </div>
  );
};

export default Login;
