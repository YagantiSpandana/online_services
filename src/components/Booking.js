import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'
const Booking = () => {
  return (
    <>
    <Navbar></Navbar>
    <div className='book'>
        <div className='sub_book'>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
        </div>
        <div className='sub_book'>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
        </div>
        <div className='sub_book'>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
        </div>
        <div className='sub_book'>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
        </div>
        <div className='sub_book'>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
        </div>
        <div className='sub_book'>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
        </div>
    </div>
    <Link to='/seats' className='books'>Book Now</Link>
    <Footer></Footer>
    </>
  )
}

export default Booking
