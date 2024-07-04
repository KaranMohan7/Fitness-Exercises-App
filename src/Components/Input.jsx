import React, { useContext, useEffect, useState } from 'react'
import {exerciseoptions,FetchData} from '../Utils/FetchData'
import { contextt } from '../Context/Context'
import Sliderr from './Sliderr'

const Input = () => {
   

    const {input,setinput,setexercises,setbodypart} = useContext(contextt)

    useEffect(() => {
    const fetcher = async() =>{
        const resp = await FetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseoptions)
        
    setbodypart(['all',...resp]);
    } 
    fetcher()
    }, [])

    const HandleSearch = async () =>{
        if(input){
            const ExerciseMaindataa = await FetchData('https://exercisedb.p.rapidapi.com/exercises?offset=0&limit=300',exerciseoptions);
            
            const exercisefilter = ExerciseMaindataa.filter(

                (item) => item.name.includes(input) || item.target.includes(input) || item.equipment.includes(input) || item.bodyPart.includes(input),
                  

              );
            setinput('');
            setexercises(exercisefilter);
        }
      
    }

  return (
    <>
    <div className='flex flex-col items-center justify-center'>
        <h1 className='text-center md:text-xl lg:text-3xl text-white'>Awesome Exercises You Should Know !</h1>
        <div className='flex items-center justify-evenly space-x-2 pt-2'>
        <input className='p-1 rounded-md bg-slate-50 outline-none md:p-2 md:min-w-[420px] lg:min-w-[420px] ' type='text' placeholder='Search Exercises' value={input} onChange={(e) =>{setinput(e.target.value.toLowerCase())}}></input>
        <button onClick={HandleSearch} className='p-1 bg-blue-400 font-semibold text-white rounded-md md:p-2 min-w-24'>Search</button>
        </div>

    </div>
    <Sliderr/>
    </>
  )
}

export default Input