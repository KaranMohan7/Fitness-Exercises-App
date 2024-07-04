import React from 'react'

import Input from './Input'


function Home() {
  return (
    <div className='w-full min-h-screen '>
     
        <div>
          <img className='w-full border-none rounded-2xl mix-blend-overlay' src='src\assets\images\picturesMain.png'></img>
          <div className='w-full text-4xl text-center text-white p-3 md:text-4xl lg:text-6xl'>
          <h1>The Best <span className='text-red-500 font-bold'>Fitness</span> Club</h1>
          <h1>Sweat,Smile</h1>
          <h1 className='font-semibold'> And Repeat..</h1>
         
          </div>
          <p className='text-center text-white lg:text-2xl'>Check out the Most Effective Exercises Personlised for You !</p>
        </div>
        <div className='p-2 sm:p-4 md:p-5 lg:p-5 text-center'>
        <button className='p-2 md:p-3 lg:p-4 mt-3 bg-blue-400 rounded-md font-semibold text-white  ' onClick={() => {
          window.scrollTo({
            top: 2000,
            behavior: 'smooth'
          })
        }}>Explore Exercises</button>
        </div>
        <Input/>
    </div>
  )
}

export default Home