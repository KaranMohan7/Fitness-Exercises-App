import React, { useContext,useEffect } from 'react'
import { contextt } from '../Context/Context'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Exerciseimages from './Exerciseimages';
import Pagination from './Pagination';
import { FetchData, exerciseoptions } from '../Utils/FetchData';
import Logogym from '../assets/icons/gymmain.png';

const Sliderr = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

const {bodypart,exercises,setexercises,currentpage,setcurrentpage,picperpage,bodyparts,setbodyparts} = useContext(contextt);

useEffect(() => {
 const firstfetcher = async() => {
  let data = [];
  if(bodyparts==='all'){
     data = await FetchData("https://exercisedb.p.rapidapi.com/exercises?offset=0&limit=250",exerciseoptions)
  }else{
     data = await FetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyparts}`,exerciseoptions);
  }
      setexercises(data)
 }
 firstfetcher()
}, [bodyparts])


   let lastpostindex = currentpage*picperpage;
  let firstpostindex = lastpostindex-picperpage;
  let sliced = exercises.slice(firstpostindex,lastpostindex);

  const paginate = (number) => {
  setcurrentpage(number);
  
  window.scrollTo({ top: 1800, behavior: 'smooth' });
   }   

  return (
  
    <div>
    <div className='p-20'>
         <Slider {...settings}>
        
        {
         
       bodypart.map((item,index)=>{
        return <div onClick={() => setbodyparts(item)} className='text-l  lg:text-2xl text-white font-semibold border  h-20  lg:w-48 lg:h-72' key={index}>
          <img className='m-auto lg:pt-10 w-10 mt-4 lg:w-32 cursor-pointer' src={Logogym}/>
         <div className='text-center lg:mt-10'>{item.toUpperCase()}</div> 
        </div>
      
       })
        }
        </Slider>

    </div>
    <Exerciseimages sliced={sliced}/>
    <Pagination postperpage={picperpage} paginate={paginate} total={exercises.length}/>
    </div>
  
  )
}

export default Sliderr