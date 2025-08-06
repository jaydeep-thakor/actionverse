import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { dummyShowsData } from '../assets/assets';

const MovieDetails = () => {

  const {id} = useParams();
  const [show, setShow] = useState(null);

  const getShow = async () => {
    const aShow = dummyShowsData.find(showw => showw._id === id);
    setShow({
      movie: aShow
    })
    console.log(aShow)
  }

  useEffect(()=>{
getShow();
  }, [id])

  return show ? (
    <div>
     
     <img src={show.movie.poster_path} alt="fsgd" />

    </div>
  ) : <div>
    loading
  </div>
}

export default MovieDetails