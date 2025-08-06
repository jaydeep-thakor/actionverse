import { ArrowRight } from 'lucide-react';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import BlurCircle from './BlurCircle';
import {dummyShowsData} from "../assets/assets"
import MovieCard from './MovieCard';

const FeaturedSection = () => {

    const navigate = useNavigate();

    return (
    <div className='custom-container'>
        
        <div className='pt-20 pb-10 relative flex justify-between items-center'>

            <BlurCircle top='0' right='-80px'/>

        <p className='text-gray-300 font-medium text-lg'>Top Shows</p>

        <button onClick={()=> navigate("/movies")} className='group flex items-center gap-2 text-sm text-gray-300'>
            View All
            <ArrowRight className='group-hover:translate-x-0.5 transition h-5'/></button>
        </div>

        <div className='flex flex-wrap gap-[30px]'>

{dummyShowsData.slice(0,6).map((show, index) => (
    <MovieCard key={index} movie={show} />
))}

        </div>

        <div className='flex justify-center mt-20'>

        <button onClick={()=> {navigate("/movies"); scrollTop(0,0)}} className="mt-2 bg-primary hover:bg-primary-hover text-white font-semibold px-4 py-2 shadow-md transition font-marvel tracking-wider">
                                    Show More
                                </button>

        </div>

    </div>
  )
}

export default FeaturedSection