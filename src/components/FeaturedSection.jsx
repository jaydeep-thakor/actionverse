import { ArrowRight } from 'lucide-react';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BlurCircle from './BlurCircle';
import {dummyShowsData} from "../assets/assets"
import MovieCard from './ShowCard';

const FeaturedSection = () => {

    const [tab, setTab] = useState("series");
    console.log(tab)

    const navigate = useNavigate();

    return (
    <div className='custom-container'>
        
        <div className='max-md:pt-15 pt-20 pb-10 relative flex justify-between items-center'>

            <BlurCircle top='0' right='-80px'/>

        <p className='text-gray-300 font-medium text-lg'>Top Shows</p>

        <button onClick={()=> navigate("/shows")} className='group flex items-center gap-2 text-sm text-gray-300'>
            View All
            <ArrowRight className='group-hover:translate-x-0.5 transition h-5'/></button>
        </div>

<div className='flex gap-5 items-center mb-10'>
<button onClick={()=> setTab("series")} className={`text-sm transition duration-300 border border-primary px-6 py-1.5 rounded-sm ${tab === "series" ? "bg-primary text-white" : "text-primary"}`}>Web Series</button>
<button onClick={()=> setTab("movies")} className={`text-sm transition duration-300 border border-primary px-6 py-1.5 rounded-sm ${tab === "movies" ? "bg-primary text-white" : "text-primary"}`}>Movies</button>
</div>

        <div className='flex flex-wrap gap-[30px]'>

{dummyShowsData
    .filter(item => tab === "series" ? item.type === "series" : item.type === "movie") 
    .slice(0,6)
    .map(item => (
      <MovieCard key={item.id} movie={item} /> 
    ))
  }

        </div>

        <div className='flex justify-center mt-20'>

        <button onClick={()=> {navigate("/shows"); scrollTo(0,0);}} className="mt-2 bg-primary hover:bg-primary-hover text-white font-semibold px-4 py-2 shadow-md transition font-marvel tracking-wider">
                                    Show More
                                </button>

        </div>

    </div>
  )
}

export default FeaturedSection



