import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"
import {FaFacebook} from "react-icons/fa"



function Footer() {
  return (
    <footer className='flex w-[100%] left-0 bottom-0 fixed flex-col bg-white px-3rem items-center justify-center text-black text-lg mt-[12rem] font-medium h-[190px]'>
      <a href="#" className="footer__logo flex">PISURV</a>
      <ul className="permalinks flex gap-2 ">
        <a href="https://www.linkedin.com/in/ibukunoluwa-oyeniyi-86b202159/" target="_blank" rel='noreferrer'><BsLinkedin/> </a>
        <a href="https://github.com/ibkay998" target="_blank" rel='noreferrer'> <FaGithub/></a>
        <a href="https://twitter.com/ibkay998" target="_blank" rel='noreferrer'> <FaTwitter/></a>
        <a href="https://facebook.com/ibukunoluwa-oyeniyi" target="_blank" rel='noreferrer'> <FaFacebook/></a>
      </ul>

      

      <div className="footer__copyright">
        <small>&copy; PISURV All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer