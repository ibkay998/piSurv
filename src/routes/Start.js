import React from 'react'
import SliderHeader from './SliderHeader'
import MainBody from './MainBody'
import Footer from './Footer'
import Login from './Login'
import Register from './Register'
import Home from './Home'
import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthProvider";
import { Routes,Route } from 'react-router-dom'
import "./home.css"
import { Outlet } from 'react-router-dom'

function Start() {
  const { auth ,setAuth } = useContext(AuthContext);
  const logout = async () => {
    // if used in more components, this should be in context 
    // axios to /logout endpoint 
    setAuth({});

}
  return (
    <div className="start">
      <Routes>
        <Route path = "home" element={<Home/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
      </Routes>
      
      
    </div>
    


  )
}

export default Start
