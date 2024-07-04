import React from 'react'

import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import ExerciseDetail from './Components/ExerciseDetail'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import FramerAni from './Components/FramerAni'


function App() {
  return (

    <div className='bg-gradient-to-r from-cyan-100 to-zinc-700'>
      <FramerAni/>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/exercise/:id' element={<ExerciseDetail/>}></Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App