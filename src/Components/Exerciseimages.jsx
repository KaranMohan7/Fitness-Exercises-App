import ExerciseCard from './ExerciseCard'
import { Link } from 'react-router-dom'



const Exerciseimages = ({sliced}) => {

  return (
    <div>
     <p className='lg:text-2xl lg:pl-20 pl-5 text-white font-semibold'>Showing Results</p>
     <div>
         <div className='text-white flex flex-wrap items-center justify-evenly '>
            {
                sliced.map((item,index) => {
                 
                    return  <Link key={index} to={`/exercise/${item.id}`}><div key={index} className=' p-5 '>
                      <ExerciseCard item={item}/>
                     <p key={index} className='font-semibold  sm:w-64 lg:w-80 text-center '> {item.name.toUpperCase()}</p></div></Link>
                })
            }
         </div>
     </div>
    </div>
  )
}

export default Exerciseimages