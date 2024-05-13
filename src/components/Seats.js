import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
const Seats = () => {
    var [amou,setAmou] = useState('');
    var [inp1,setInp1] = useState('');
    var [inp2,setInp2] = useState('');
    var [inp3,setInp3] = useState('');
    var [inp4,setInp4] = useState('');
    var [inp5,setInp5] = useState('');
    var [inp6,setInp6] = useState('');
    var [array,setArray] = useState([]);
    const amount = (event) =>{
        const value=event.target.value;
        setAmou(value*800);
    }
    const ticket1 = (event) =>{
        setInp1(event.target.value);
    }
    const ticket2 = (event) =>{
        setInp2(event.target.value);
    }
    const ticket3 = (event) =>{
        setInp3(event.target.value);
    }
    const ticket4 = (event) =>{
        setInp4(event.target.value);
    }
    const ticket5 = (event) =>{
        setInp5(event.target.value);
    }
    const ticket6 = (event) =>{
        setInp6(event.target.value);
    }
    const ticket = () => {
        const newData={inp1,inp2,inp3,inp4,inp5,inp6};
        setArray([...array, newData]);
        
    }
  return (
    <>
      <Navbar></Navbar>
      <div className='main_book'>
        <div className='sub_book'>
            <p>NAME:</p>
            <input type='text' onChange={ticket1}></input>
        </div>
        <div className='sub_book'>
            <p>MAIL ID:</p>
            <input type='text' onChange={ticket2}></input>
        </div>
        <div className='sub_book'>
            <p>PH NO:</p>
            <input type='text' onChange={ticket3}></input>
        </div>
        <div className='sub_book'>
            <p>FROM:</p>
            <input type='text' onChange={ticket4}></input>
        </div>
        <div className='sub_book'>
            <p>TO:</p>
            <input type='text' onChange={ticket5}></input>
        </div>
        <div className='sub_book'>
            <p>DATE:</p>
            <input type='date' onChange={ticket6}></input>
        </div>
        <div className='sub_book'>
            <p>NO OF SEATS:</p>
            <input type='number' onChange={amount} min={0} max={6}></input>
        </div>
        <div className='sub_book'>
            <p>AMOUNT:</p>
            <input type='text' value={amou}></input>
        </div>
        <button onClick={ticket}>book</button>
      </div>
      <div className='tick_book'>{array.map((items)=>{return <table><tr><td>Name:{items.inp1}</td><td>Mail id:{items.inp2}</td>
       <td>Ph no:{items.inp3}</td><td>From:{items.inp4}</td>
       <td>To:{items.inp5}</td><td>Date:{items.inp6}</td></tr></table>})}</div>
      <Footer></Footer>
    </>
  )
}

export default Seats
