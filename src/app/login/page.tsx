import React from 'react'
import Image from 'next/image';
import tree from '../../../public/treebg.avif'
import ice from '../../../public/icebg.jpg'
import Link from 'next/link';

const Login = () => {
  return (
    <div className='flex w-full h-dvh '>
        {/* l.h.s */}
        <div className='w-full md:w-[60%] py-10 px-5 md:py-14 md:px-20'>
            <h1 className='text-xl md:text-2xl font-bold text-center'>Login</h1>
            <p className='text-[10px] md:text-xs pt-2 text-center'>To access your account</p>

            <form action="" method="post" className='text-[10px] md:text-xs '>
                <div className='flex flex-col pt-10 gap-5'>

                    <label htmlFor="email">
                        Email
                        <input type="email" name="email" id="email" required className='h-10 border rounded-lg w-full mt-2 outline-none pl-5' />
                    </label>

                    <label htmlFor="password">
                        Password
                        <input type="password" name="password" id="password" required className='h-10 border rounded-lg w-full mt-2 outline-none pl-5' />
                    </label>

                </div>
                

                <p className='text-[10px] md:text-xs underline pt-5 text-center cursor-pointer'>forgot password?</p>

                <div className='flex items-center justify-center pt-10'>
                    <button type="submit" className='text-[10px] md:text-xs  text-white bg-gray-400 border py-4 px-12 rounded-3xl hover:bg-[#222222] '>Login</button>


                </div>
                
            </form>
            <p className='pt-10 text-[10px] md:text-xs text-center '>Don't have an account?  <Link href={'/signup'} className='underline'>Sign up</Link></p>

        </div>

        {/* r.h.s */}
        <div className='w-[40%] hidden md:block '>
            <Image src={ice} alt='tree image' 
            style={{ width: '100%', height: '100%', opacity: '90%' }} />
        </div>
       
      
    </div>
  )
}

export default Login;
