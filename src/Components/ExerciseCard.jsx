import React from 'react'

const ExerciseCard = ({item}) => {
  return (
  
    <div className=' sm:w-64 lg:w-80 lg:h-96 space-y-3 space-x-3'>
    <img className='rounded-md mix-blend-multiply ' src={item.gifUrl} loading='lazy'></img>
    <button className='bg-red-400 rounded-lg p-2 text-sm font-semibold'>{item.bodyPart.toUpperCase()}</button>
    <button className='bg-green-500 rounded-lg p-2 text-sm font-semibold'>{item.target.toUpperCase()}</button>
    </div>
   
  )
}

export default ExerciseCard