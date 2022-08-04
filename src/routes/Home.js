import React from 'react'
import SliderHeader from './SliderHeader'
import MainBody from './MainBody'
import Footer from './Footer'
import "./home.css"
function Home() {
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
