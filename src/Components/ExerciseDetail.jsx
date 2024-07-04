import { useEffect, useContext } from "react"
import { FetchData, exerciseoptions, ytoptions } from '../Utils/FetchData';
import Details from "./Details";


import { contextt } from "../Context/Context";
import { useParams } from "react-router-dom";
import Similarexercises from "./Similarexercises";
import Exercisevideos from "./Exercisevideos";

const ExerciseDetail = () => {

  const {detail,setdetail,videoyt,setvideoyt,target,settarget} = useContext(contextt);
  const {id} = useParams();

  useEffect(() => {
   window.scrollTo({
    top:0
   })
    const urlfetcherr = async () => {
      const exerciseurl = 'https://exercisedb.p.rapidapi.com';
      const yturl = 'https://youtube-search-and-download.p.rapidapi.com';
  
        const detaildata = await FetchData(`${exerciseurl}/exercises/exercise/${id}`,exerciseoptions);
        setdetail(detaildata)

        const ytsearchurl = await FetchData(`${yturl}/search?query=${detaildata.name}`,ytoptions);
        setvideoyt(ytsearchurl.contents);

        const targetdata = await FetchData(`${exerciseurl}/exercises/target/${detaildata.target}`,exerciseoptions);
        settarget(targetdata);

    }
    urlfetcherr();
  }, [id]);


  if (!detail) return <div>No Data</div>;
  return (
    <div>
      
      <Details maindetails={detail}/>
    <Similarexercises  videodata={videoyt} name={detail.name}/>
      <Exercisevideos  targets={target} />
     
    </div>
  )
}

export default ExerciseDetail