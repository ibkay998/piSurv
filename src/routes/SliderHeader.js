import React from 'react'

function SliderHeader() {
  return (
    <section id="Home">
        <nav className='flex justify-between border-b-2 border-black p-3'>
            <p className="font-medium text-2xl">PiSurv</p>
            <div className='flex gap-2'>
                <a href="/login?company" className='p-2 bg-fuchsia-700 hover:bg-fuchsia-200 hover:text-black rounded-md'>Login</a>
                <a href="/login?user"className='p-2 bg-fuchsia-700 hover:bg-fuchsia-200 hover:text-black rounded-md'>Company Login</a>
            </div>
        </nav>
    </section>
  )
}

export default SliderHeader