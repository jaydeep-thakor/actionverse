import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Movies from './pages/Shows';
import MovieDetails from './pages/ShowDetails';
import SeatLayout from './pages/SeatLayout';
import MyBookings from './pages/MyBookings';
import Favorite from './pages/Favorite';

const App = () => {
  return (
    <>
      
      <Navbar/>

      <Routes>

    <Route path="/" element={<Home/>}/>
    <Route path="/shows" element={<Movies/>}/>
    <Route path="/shows/:id" element={<MovieDetails/>}/>
    <Route path="/shows/:id/:date" element={<SeatLayout/>}/>
    <Route path="/my-bookings" element={<MyBookings/>}/>
    <Route path="/favorite" element={<Favorite/>}/>

      </Routes>

    </>
  )
}

export default App