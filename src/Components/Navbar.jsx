import React, {} from 'react'
import { Link } from 'react-router-dom'


function Navbar() {

  
  return (
    <div className=' w-full p-5 text-white font-semibold flex items-center justify-around sm:p-6  md:text-xl'>
      <div>
        <Link to='/'><img className='w-10 md:w-14 mix-blend-darken' src='src\assets\images\Logo.png'></img></Link>
      </div>
      <div className='space-x-6'>
        <Link to='/'>Home</Link>
        <a onClick={() => {
          window.scrollTo({
           top: 1800,
           behavior: 'smooth'
          })
        }} className='cursor-pointer'>Exercises</a>
      </div>
    </div>
  )
}

export default Navbar