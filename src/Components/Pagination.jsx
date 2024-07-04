import React, { useState } from 'react'

const Pagination = ({postperpage,total,paginate}) => {
    const pagearray = [];
    for(let i = 1 ; i<Math.ceil(total/postperpage);i++){
        pagearray.push(i);
    }
  
    const [active,setactive] = useState(1);

  return (
<>
        <div className=' text-white flex flex-wrap justify-center items-center gap-4 '>
                {
                    pagearray.map((item,index) => (
                        <div className={` w-12 font-semibold  mt-6 cursor-pointer`} key={index}>
                              <a className={`w-5 border p-3 rounded-xl  ${active===item ? 'bg-red-400' : '' }`  } onClick={() => {
                                paginate(item) 
                                setactive(item) }}>{item}</a>
                        </div>
                    ))
                }
        </div>
        </>
  )
}

export default Pagination