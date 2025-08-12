import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { dummyDateTimeData, dummyShowsData } from "../assets/assets"
import BlurCircle from '../components/BlurCircle';
import { PlayCircleIcon, Star, Ticket } from 'lucide-react';
import Casts from '../components/Casts';
import DateSelect from '../components/DateSelect';
import Loading from '../components/Loading';

const MovieDetails = () => {

  const { id } = useParams();
  const [show, setShow] = useState(null);

  const getShow = async () => {
    const showId = dummyShowsData.find((i) => {
      return i._id === id;
    })
    if(showId){
    setShow({
      showObj: showId,
      dateTime: dummyDateTimeData
    })
    }
  }

  useEffect(() => {
    getShow();
  }, [id])

return show ? <div className='custom-container pt-20 md:pt-30 pb-10'>


<div className='flex flex-col md:flex-row gap-8 max-w-6xl mx-auto'>

<img className='max-md:mx-auto rounded-xl h-104 max-w-70 object-cover' src={show.showObj.poster_path} alt="" />

<div className="relative flex flex-col gap-4 py-2">

  <BlurCircle top="-100px" left="-100px" />

  <h3 className="text-primary text-sm font-medium uppercase tracking-wide">
    English
  </h3>

  <h2 className="text-4xl font-bold max-w-3xl leading-tight text-white">
    {show.showObj.title}
  </h2>

  <div className="flex items-center gap-2 text-lg font-medium text-white">
    <Star className="fill-primary text-primary w-5 h-5" />
    {show.showObj.vote_average}
  </div>

  <p className="text-gray-400 text-base leading-relaxed max-w-2xl">
    {show.showObj.overview}
  </p>

  <div className="flex flex-wrap items-center gap-2 text-sm text-gray-300">
    <span className="font-semibold text-white">Genres:</span>
    {show.showObj.genres.map((genre) => genre.name).join(", ")}
  </div>

  <div className="flex items-center gap-2 text-sm text-gray-300">
    <span className="font-semibold text-white">Total Episodes:</span>
    {show.showObj.total_episodes}
  </div>

  <div className="flex items-center gap-2 text-sm text-gray-300">
    <span className="font-semibold text-white">
      {new Date(show.showObj.release_date) > new Date()
        ? "Releasing on:"
        : "Released on:"}
    </span>
    {new Date(show.showObj.release_date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })}
  </div>


<div className='flex items-center gap-4'>
<button className='text-xs font-medium flex items-center bg-gray-800 hover:bg-gray-900 cursor-pointer transition duration-300 rounded-md py-3 px-5 gap-2'><PlayCircleIcon/> Watch Trailer</button>
<a href="#dateSelect" className='flex items-center text-xs font-medium bg-primary hover:bg-primary-hover cursor-pointer transition duration-300 rounded-md py-3 px-5 gap-2'><Ticket/> Buy Tickets</a>
</div>
  
</div>


</div>

<div className='pt-7 md:pt-14'>
<h2 className='text-lg font-medium mb-4'>Casts</h2>
<div className='flex items-center gap-4 w-max px-4 overflow-x-auto no-scrollbar mt-8 pb-4'>
<Casts casts={show.showObj.casts}/>
</div>
</div>



<DateSelect dateTime={show.dateTime} id={id}/>




  </div> : <div>

<Loading/>


  </div>
 



  
}

export default MovieDetails