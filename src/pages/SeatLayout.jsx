import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { dummyDateTimeData, dummyShowsData } from '../assets/assets';
import isoTimeFormat from '../libs/isoTimeFormat';
import BlurCircle from '../components/BlurCircle';
import screenImg from "../assets/images/shape/screenImage.svg"

const SeatLayout = () => {

  const [show, setShow] = useState();
  const [selectedTime, setSelectedTime] = useState();

  const { id, date } = useParams();
  console.log(id, date)

  const getShow = async () => {
    const showId = dummyShowsData.find((show) => show._id === id);
    setShow({
      newShow: showId,
      dateTime: dummyDateTimeData
    })
  }

  const renderSeats = (row, count = 9) => {
    return (
      <div key={row} className='flex gap-2 mt-2'>
        <div className='flex flex-wrap items-center justify-center gap-2'>
          {
            Array.from({ length: count }, (_, i) => {
              const seatId = `${row}${i + 1}`;
              return (
                <button key={seatId}>{seatId}</button>
              )
            })
          }
        </div>
      </div>
    )
  }

  useEffect(() => {
    getShow();
  }, [])

  return show ? (
    <div className='flex flex-col md:flex-row custom-container py-30 md:py-50'>

      <div className='w-60 bg-primary/10 border border-primary/30 rounded-lg py-10 h-max md:sticky md:top-30'>

        <p className='text-lg font-semibold px-6 text-center'>Available Timings</p>
        <div className='mt-5 space-y-1 flex justify-center items-center flex-col'>
          {
            show.dateTime[date].map((item, index) => {
              console.log(item)
              return (
                <div onClick={() => { setSelectedTime(item) }} className={`flex items-center gap-2 justify-center px-8 py-2 w-max rounded-md cursor-pointer transition ${selectedTime?.time === item.time ? "bg-primary text-white" : "hover:bg-primary/20"}`} key={index}>
                  <h1>{isoTimeFormat(item.time)}</h1>
                </div>
              )
            })
          }
        </div>
      </div>

      <div className='relative flex flex-1 flex-col items-center max-md:mt-16'>

        <BlurCircle top='-100px' left='-100px' />
        <BlurCircle top='0px' left='0px' />
        <h1 className='text-2xl font-semibold mb-4'>Select your seat</h1>

        <img src={screenImg} alt="screen" />
        <p className='text-gray-400 text-sm mb-6'>SCREEN SIDE</p>

      </div>

    </div>
  ) : (

    <div>
      Loading
    </div>

  )
}

export default SeatLayout



