import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { dummyDateTimeData, dummyShowsData } from '../assets/assets';
import Loading from '../components/Loading';
import { ClockIcon } from 'lucide-react';
import isoTimeFormat from  "../libs/isoTimeFormat"

const SeatLayout = () => {
  
  const {id, date} = useParams();
  const [selectedSeat, setSelectedDate] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);
  const [show, setShow] = useState(null);

  const navigate = useNavigate();
 n
  const getShow = async () => {
    const showId = dummyShowsData.find((show)=>{
      return show._id === id;
    })
    
    if(showId){
      setShow({
        movie: show,
      dateTime: dummyDateTimeData
      })
    }
  }

  const renderSeats = (row, count=9) => {
    return <div key={row} className='flex gap-2 mt-2'>

<div className='flex flex-wrap items-center justify-center gap-2'>
  {
    Array.from({length: count}, (_, i)=>{
      const seatId = `${row}${i+1}`;
      return (
        <button key={seatId} onClick={()=>{handleSeatClick(seatId)}} className={`h-8 w-8 rounded border border-primary/60 cursor-pointer ${selectedSeat.includes(seatId) && "bg-primary text-white"}`}>{seatId}</button>
      )
    })
  }
</div>

    </div>
  }

  useEffect(()=>{
getShow();
  }, [])

  return show ? (
    <div className='custom-container pt-20 md:pt-20 pb-10'>

<div className='w-60 bg-primary/10 border border-primary/20 rounded-lg py-10 h-max md:sticky md:top-30'>
  
  <h2 className=''>Available Timings</h2>

    <div className=''>
      {show.dateTime[date].map((item, index)=>{
        return (
        <div onClick={()=> setSelectedTime(item)} key={index} className={`flex items-center gap-2 px-6 py-2 w-max rounded-r-md cursor-pointer transition hover:bg-primary/20 ${selectedTime?.time === item.time ? "bg-primary" : "hover:bg-primary/20"}`}>
          <ClockIcon/>
          <h4 className='text-sm'>{isoTimeFormat(item.time)}</h4>
        </div>
        )
      })}
    </div>

</div>

    </div>
  ) : (
    <div>

    <Loading/>

    </div>
  )
}

export default SeatLayout