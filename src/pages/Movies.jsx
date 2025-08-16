import React, {useState} from 'react'
import MovieCard from '../components/MovieCard'
import { dummyShowsData } from '../assets/assets'

const Movies = () => {

  const [tab, setTab] = useState("series");
  console.log(tab)

  return (
    <div className='relative my-10 overflow-hidden min-h-[80vh]'>
    <div className='custom-container'>
      
      <div className='flex gap-5 items-center mb-10'>
      <button onClick={()=>{setTab("series")}} className={`text-sm py-1.5 px-6 border transition duration-300 border-primary rounded-sm ${tab === "series" ? "bg-primary text-white" : "text-primary"}`}>Web Series</button>
      <button onClick={()=>{setTab("movies")}} className={`text-sm py-1.5 px-6 border transition duration-300 border-primary rounded-sm ${tab === "movies" ? "bg-primary text-white" : "text-primary"}`}>Movies</button>
</div>

      <div className='flex flex-wrap gap-[30px]'>

{
dummyShowsData.filter(item => tab === "series" ? item.type === "series" : item.type === "movie").map((item, index)=> <MovieCard key={index} movie={item}/>)  
}

              </div>

    </div>
  </div>
  )
}

export default Movies