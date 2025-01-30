import React from 'react'
import Image from 'next/image';
import tree from '../../../public/treebg.avif'
import ice from '../../../public/icebg.jpg'
import Link from 'next/link';

const SignUp = () => {
  return (
    <div className='flex w-full h-dvh '>
        {/* l.h.s */}
        <div className='w-full md:w-[60%] py-10 px-5 md:py-14 md:px-20'>
            <h1 className='text-xl md:text-2xl font-bold '>Welcome to SMA Community</h1>
            <p className='text-[10px] md:text-xs pt-2'>Already have an account? <Link href={'/login'} className='underline'>Log in</Link></p>

            <form action="" method="post" className='text-[10px] md:text-xs '>
                <div className='flex flex-col pt-10 gap-5'>

                    <label htmlFor="email">
                        Email
                        <input type="email" name="email" id="email" required className='h-10 border rounded-lg w-full mt-2 outline-none pl-5' />
                    </label>
                    <label htmlFor="">
                        Username
                        <input type="text" name="name" id="username" required className='h-10 border rounded-lg w-full mt-2 outline-none pl-5' />
                    </label>

                    <label htmlFor="password">
                        Password
                        <input type="password" name="password" id="password" required className='h-10 border rounded-lg w-full mt-2 outline-none pl-5' />
                    </label>

                </div>
                
                
                <ul className='pt-5 grid grid-cols-3 gap-3 text-[8px] md:text-[10px]'>
                    <li className='flex gap-2 items-center  text-gray-400'>
                        <div className='h-2 w-2 rounded-full bg-gray-400'></div>
                        <p>Use 8 or more characters</p>
                    </li>
                    <li className='flex gap-2 items-center text-gray-400'>
                        <div className='h-2 w-2 rounded-full bg-gray-400'></div>
                        <p>One Uppercase character</p>
                    </li>
                    <li className='flex gap-2 items-center text-gray-400'>
                        <div className='h-2 w-2 rounded-full bg-gray-400'></div>
                        <p>One Lowercase character</p>
                    </li>
                    <li className='flex gap-2 items-center text-gray-400'>
                        <div className='h-2 w-2 rounded-full bg-gray-400'></div>
                        <p>One special character</p>
                    </li>
                    <li className='flex gap-2 items-center text-gray-400'>
                        <div className='h-2 w-2 rounded-full bg-gray-400'></div>
                        <p>One number</p>
                    </li>
                </ul>

                <label htmlFor="" className='flex  items-center gap-3 pt-14 md:pt-10'>
                    <input type="checkbox" name="" id="" />
                    <p className='text-[10px] md:text-xs '>I want to receive emails about the product, feature updates, events, and marketing promotions.</p>
                </label>

                <p className='pt-10 md:pt-7 pb-7 md:pb-5 text-[10px] md:text-xs '>By creating an account, you agree to the <a href=""  className='underline'>Terms of use</a> and <a href="" className='underline'>Privacy Policy</a></p>

                <button type="submit" className='text-[10px] md:text-xs  text-white bg-gray-400 border py-4 px-8 rounded-3xl hover:bg-[#222222]'>Create an account</button>
            </form>
            <p className='pt-3 text-[10px] md:text-xs '>Already have an account?  <Link href={'/login'} className='underline'>Log in</Link></p>

        </div>

        {/* r.h.s */}
        <div className='w-[40%] hidden md:block'>
            <Image src={ice} alt='tree image' 
            style={{ width: '100%', height: '100%', opacity: '90%' }} />
        </div>
       
      
    </div>
  )
}

export default SignUp;
