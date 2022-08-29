import React from 'react'
import SliderHeader from './SliderHeader'
import MainBody from './MainBody'
import Footer from './Footer'
import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthProvider";

import "./home.css"
import { Outlet } from 'react-router-dom'
function Home() {
  const { auth ,setAuth } = useContext(AuthContext);
  const logout = async () => {
    // if used in more components, this should be in context 
    // axios to /logout endpoint 
    setAuth({});

}
  return (
    <div className="home">
      <div className='bg-gradient-to-b w-[75%] m-auto'>
        <SliderHeader/>
        <MainBody/>
      </div>
      <Footer/>
      
    </div>
    


  )
}

export default Home
