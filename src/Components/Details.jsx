import React, {} from 'react'
import icon1 from '../assets/icons/body-part.png'
import icon2 from '../assets/icons/target.png'
import icon3 from '../assets/icons/equipment.png'



const Details = ({maindetails}) => {
    const { gifUrl, name, bodyPart, target, equipment } = maindetails;


    const extraDetail = [
        {
          icon: icon1,
          name: bodyPart,
        },
        {
          icon: icon2,
          name: target,
        },
        {
          icon: icon3,
          name: equipment,
        },
      ];

  return (
    <>
    <div className='flex items-center p-3 h-full w-full' >
        <div className=''>
            <img className='w-[100rem] mix-blend-multiply' src={gifUrl}  loading='lazy'/>
        </div>
        <div className='ml-16'>
           <h1 className=' w-52 font-semibold text-3xl md:text-5xl md:w-full  lg:text-6xl lg:w-full capitalize '>{name}</h1>
           <p className='text-l pt-5 md:text-xl lg:text-2xl'>Exercises Keep you Strong. {name} is one of the best exercises to target your {target}. It helps you to improve your mood and gain energy.</p>

           <div className="flex flex-col pt-10 gap-10">
            {
                extraDetail.map((item,index) => (
                   <div key={index} className="flex items-center lg:gap-5">
                    <img className='max-w-12' src={item.icon} key={index}/>
                    <p className=' sm:text-sm lg:text-xl font-semibold capitalize'>{item.name}</p>
                    </div>
              
                ))
            }
          
        </div>
        </div>
        
    </div>
    </>
  )
}

export default Details