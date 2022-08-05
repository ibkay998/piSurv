import React,{useState} from 'react'
import {Link} from 'react-router-dom'


function SliderHeader() {
let [open,setOpen] = useState(false)
  return (
    <section id="Home">
        <nav className='flex justify-between border-b-2 border-black p-3'>
            <p className="font-medium text-2xl">PiSurv</p>
            <div className='flex gap-2'>
                {/* <a href="/login?company" className='p-2 bg-fuchsia-700 hover:bg-fuchsia-200 hover:text-black rounded-md'>Login</a>
                <a href="/login?user"className='p-2 bg-fuchsia-700 hover:bg-fuchsia-200 hover:text-black rounded-md'>Company Login</a> */}
                <div onClick={()=>setOpen(!open)} className="3xl absolute right-8 top-6 cursor-pointer md:hidden">
                    <ion-icon name={open ? "close":"menu"}></ion-icon>
                </div>
                <ul className={` ${open ? "flex flex-col absolute":"hidden"} mt-8 sm:m-auto text-sm gap-2 text-black tracking-tight leading-snug right-6 sm:flex bg-white sm:bg-transparent ease-in`}>
                   
                    <li className="">
                        <Link to={`/login?company`} className="sm:bg-fuchsia-700 sm:p-2 sm:rounded-md text-white rounded-lg hover:bg-fuchsia-300 hover:text-black duration-500 ">Login</Link>
                    </li>
                    <li className="">
                        <Link to={`/login?user`} className="sm:bg-fuchsia-700 sm:p-2 sm:rounded-md  text-white rounded-lg hover:bg-fuchsia-300 hover:text-black duration-500 ">Company Login</Link>
                    </li>

                        
                    
                    
                </ul>
            </div>
        </nav>
    </section>
  )
}

export default SliderHeader