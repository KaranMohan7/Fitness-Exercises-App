import React from 'react'
import Loading from './Loading'

const Similarexercises = ({videodata,name}) => {

  if(!videodata.length) return <Loading/>
  
  return (
    <div>
      <div className='w-full h-full p-5 '>
     <h1 className='capitalize text-2xl md:text-3xl  lg:text-5xl font-semibold ml-5'>watch<span className='text-red-500'> {name}</span> exercise videos ! </h1>
      </div>
    <div className="flex flex-wrap items-center justify-evenly space-y-6">
      {
        videodata?.slice(0,4).map((item,index) => (
          <a className=' hover:scale-110  transition-all ease-in' key={index} href={`https://www.youtube.com/watch?v=${item.video.videoId}`} target="_blank" rel="noreferrer" >
             <img className=' sm:w-72 lg:w-[35rem] h-80 rounded-l' src={item.video.thumbnails[0].url}/>
             <p className='text-xl font-semibold w-96 lg:w-[35rem] text-center'>{item.video.title}.</p>
             <p className='text-xl font-semibold w-96  lg:w-[35rem] text-center text-red-600 '>- {item.video.channelName}</p>
          </a>
        ))
      }
    </div>
    </div>
  )
}

export default Similarexercises