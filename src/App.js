import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Booking from './components/Booking';
import Cancel from './components/Cancel';
import Booked from './components/Booked';
import Seats from './components/Seats';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='booking' element={<Booking></Booking>}></Route>
        <Route path='cancel' element={<Cancel></Cancel>}></Route>
        <Route path='booked' element={<Booked></Booked>}></Route>
        <Route path='seats' element={<Seats></Seats>}></Route>
      </Routes>
    </div>
  );
}

export default App;
