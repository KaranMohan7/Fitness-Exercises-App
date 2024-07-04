import React, { createContext,useState,useRef } from 'react'
export const contextt = createContext()

function Context({children}) {

  const [input,setinput] = useState('');
    const [exercises,setexercises] = useState([]);
    const [bodypart,setbodypart] = useState([]);
    const [bodyparts,setbodyparts] = useState('all');
    const [currentpage,setcurrentpage] = useState(1);
    const [picperpage,setpicperpage] = useState(8);
    const [detail,setdetail] = useState({});
    const [videoyt,setvideoyt] = useState([]);
    const [target,settarget] = useState([]);
  

  
  return (
    <contextt.Provider value={{input,setinput,exercises,setexercises,bodypart,setbodypart,currentpage,setcurrentpage,picperpage,setpicperpage,bodyparts,setbodyparts,detail,setdetail,videoyt,setvideoyt,target,settarget}}>
{children}
    </contextt.Provider>
  )
}

export default Context     