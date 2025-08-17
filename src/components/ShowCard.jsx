import { StarIcon } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const MovieCard = ({movie}) => {

  const navigate = useNavigate();

  return (
    <div className='flex flex-col items-start w-[calc(50%-15px)] lg:w-[calc(16.666667%-25px)]'>

    <img onClick={()=> {scrollTo(0,0); navigate(`/shows/${movie._id}`)}} src={movie.poster_path} className='h-60 md:h-90 object-cover w-full object-bottom rounded-sm cursor-pointer' alt="" />
  
  <div className='px-1 w-full'>
    <p className="font-semibold truncate w-full mt-2" title={movie.title}>{movie.title}</p>
    <p className='text-[12px] text-gray-400 mt-1'>
  {new Date(movie.release_date).getFullYear()} • {movie.genres.slice(0,1).map(genre => genre.name).join(" | ")}
  {movie.total_episodes && ` • ${movie.total_episodes} Episode${movie.total_episodes > 1 ? 's' : ''}`}
</p>
    <div className='flex justify-between items-center w-full mt-2'>
    <button onClick={()=> {scrollTo(0,0); navigate(`/shows/${movie._id}`)}} className="text-primary bg-white font-semibold px-2 py-1 shadow-md transition font-marvel tracking-wider text-sm">Buy Tickets</button>
    <p className='flex items-center gap-1 text-sm text-gray-400'>
      <StarIcon className='w-4 h-4 text-primary fill-primary'/>{movie.vote_average.toFixed(1)}
    </p>
    </div>
</div>

    </div>
  )
}

export default MovieCard 