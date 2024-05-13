import React, { useState } from 'react'
import BusesData from '../data/BusesData';
const Main = () => {
    const [buses,setbuses] = useState([]);
    const [inpval1,setinp1] = useState('');
    const [inpval2,setinp2] = useState('');
    const [inpval3,setinp3] = useState('');
    const handleChange1 = (event) => {
        setinp1(event.target.value);
    }
    const handleChange2 = (event) => {
        setinp2(event.target.value);
    }
    const handleChange3 = (event) => {
        setinp3(event.target.value);
    }
    const getBus = () =>{
    setbuses(BusesData.filter((items)=>{return items.from===inpval1 && items.to===inpval2 && items.date===inpval3}));
    }
  return (
    <div className='sec'>
        <div className='routes'>
            <h2>Available Routes</h2>
        </div>
        <div className='rou'>
            <ul>
                <li>Hyderabad-Banglore</li>
                <li>Hyderabad-Chennai</li>
                <li>Hyderabad-Tirupati</li>
                <li>Hyderabad-Vizag</li>
            </ul>
            <ul>
                <li>Banglore-Hyderabad</li>
                <li>Banglore-Chennai</li>
                <li>Banglore-Tirupati</li>
                <li>Banglore-Vizag</li>
            </ul>
            <ul>
                <li>Tirupati-Banglore</li>
                <li>Tirupati-Chennai</li>
                <li>Tirupati-Hyderabad</li>
                <li>Tirupati-Vizag</li>
            </ul>
            <ul>
                <li>Vizag-Banglore</li>
                <li>Vizag-Chennai</li>
                <li>Vizag-Tirupati</li>
                <li>Vizag-Hyderad</li>
            </ul>
        </div>
        <input type="text" placeholder='From' value={inpval1} onChange={handleChange1}/>
        <input type="text" placeholder='To' value={inpval2} onChange={handleChange2}/>
      <input type='date' value={inpval3} onChange={handleChange3}></input>
      <button onClick={getBus}>get busses</button>
      <div className='search'>{buses.map((items)=>{return <table><tr><td>{items.name}</td><td>{items.service}</td>
      <td>{items.from}</td><td>{items.to}</td><td>{items.date}</td></tr></table>})}</div>
    </div>
  )
}


export default Main