import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { dummyDateTimeData, dummyShowsData } from '../assets/assets';
import isoTimeFormat from '../libs/isoTimeFormat';

const SeatLayout = () => {

  const [show, setShow] = useState();

  const {id, date} = useParams();
  console.log(id, date)

  const getShow = async () => {
    const showId = dummyShowsData.find((show)=> show._id === id);
    setShow({
      newShow: showId,
      dateTime: dummyDateTimeData
    })
  }

  useEffect(()=>{
getShow();
  },[])

  return show ? (
    <div>


{
  show.dateTime[date].map((time, index)=>{
    return (
      <div key={index}>
        <h1>{isoTimeFormat(time.time)}</h1>
      </div>  
    )
  })
}

    </div>
  ) : (

    <div>
      Loading
    </div>

  )
}

export default SeatLayout