import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <h1 className='main'>ONLINE BUS BOOKING SERVICE</h1>
      <div className='main_sec'>
        <img src="./main.png" />
        <Link to='/' className='main_link'>home</Link>
      </div>
      <div className='sub'>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/booking'>Ticket Booking</Link></li>
          <li><Link to='/cancel'>Ticket Cancel</Link></li>
          <li><Link to='/booked'>Booked Tickets</Link></li>
        </ul>
      </div>
    </>
  )
}

export default Navbar