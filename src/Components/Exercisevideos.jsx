import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loading from './Loading';
import ExerciseCard from './ExerciseCard';

const Exercisevideos = ({targets}) => {

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
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className='w-full p-6 mt-10 overflow-hidden'>
      <h1 className='text-5xl'>Exercises That Target The <span className='text-red-500'>Same Muscle</span> Group</h1>
      <div>
      <Slider {...settings}> 
       {
       targets.length !==0 ? targets.map((item,index) => (
         <div className='p-2 mt-7 w-7' key={index}>
          <ExerciseCard item={item} />
          </div>
        )) : <Loading/>
       }
        </Slider>
      </div>
    </div>
  )
}

export default Exercisevideos