import React, { useState } from 'react'
import { dummyTrailers } from '../assets/assets'
import BlurCircle from './BlurCircle'
import ReactPlayer from 'react-player'

const TrailerSection = () => {

  const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0])
console.log("urlll",currentTrailer.videoUrl);
console.log("hdfgjksdhkjg",JSON.stringify(currentTrailer.videoUrl));

  return (
    <div className='custom-container py-20 overflow-hidden'>

        <p className='text-gray-300 font-medium text-lg max-w-[960px] mx-auto'>Trailers</p>

        <div className='relative mt-6'>
{currentTrailer?.videoUrl && (
  <ReactPlayer
    url={currentTrailer.videoUrl}
    controls
    className="mx-auto max-w-full"
    width="960px"
    height="540px"
  />
)}
          <ReactPlayer src='https://www.youtube.com/watch?v=5VYb3B1ETlk' />
        </div>

    </div>
  )
}

export default TrailerSection