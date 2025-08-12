import React from 'react'
import MovieCard from '../components/MovieCard'
import { dummyShowsData } from '../assets/assets'

const Movies = () => {
  return (
    <div className='relative my-10 overflow-hidden min-h-[80vh]'>
    <div className='custom-container'>
      
      <div className='flex flex-wrap gap-[30px]'>


    {
      dummyShowsData.map((show, index)=>{
        return (<MovieCard key={index} movie={show}/>)
      })
    }

              </div>

    </div>
  </div>
  )
}

export default Movies