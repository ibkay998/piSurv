import React from 'react'
import SliderHeader from './SliderHeader'
import MainBody from './MainBody'
import Footer from './Footer'
import "./home.css"
function Home() {
  return (
    <div>
      <div className='home bg-gradient-to-b w-[75%] m-auto'>
        <SliderHeader/>
        <MainBody/>
      </div>
      <Footer/>
    </div>
    


  )
}

export default Home
