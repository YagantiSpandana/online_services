import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Cancel = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className='can_main'>
        <div className='can_sub'>
          <p>FROM:</p>
          <input type='text'></input>
        </div>
        <div className='can_sub'>
          <p>TO:</p>
          <input type='text'></input>
        </div>
        <div className='can_sub'>
          <p>SERVICE NO:</p>
          <input type='text'></input>
        </div>
        <button>cancel</button>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Cancel