import React from 'react'
import {BiBookmark} from "react-icons/bi"

function MainBody() {
  return (
    <div className='grid grid-cols-1 gap-[15%] mt-[9rem] mb-[2rem] sm:grid-cols-2 '>
        <div className='flex flex-col ml-3 items-center m-auto justify-center'>
            <p className='text-2xl leading-6 tracking-tight pl-4 font-bold mt-4 items-center'>Fill Surveys And Get Paid</p>
            <button className=' bg-fuchsia-900 mt-4 text-white rounded-lg hover:bg-fuchsia-300 hover:text-black p-2'><a href="/register"> Register</a>  </button>
            <small className='mt-5 text-center'>Already Registered  <br/> <a href="/login" className='text-lg hover:text-fuchsia-300'>Login</a></small>
        </div>
        <div className='flex '>
            <div className='bg-fuchsia-900 items-center hover:bg-transparent hover:border-2 transition duration-300 p-6 flex flex-col items-center'>
                <BiBookmark className='m-auto'/>
                <h5>Do you have surveys that need to be filled by users</h5>
                <button className=' bg-white mt-4 text-black rounded-lg hover:bg-fuchsia-300  p-2'><a href="/register">Get Started Now</a></button>
            </div>
        </div>
    </div>
  )
}

export default MainBody