import './App.css';
import React from 'react';
import Home from './components/home/Home';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import About from './components/about/About';
import Services from './components/services/Services';
import NotFound from './components/notFound/NotFound';
import ReserveWasher from './components/reserveWasher/ReserveWasher';
import SchedulePickUp from './components/shedulePickUp/SchedulePickUp';


function App() {



  
  return (
    <>
    <nav><Navbar></Navbar></nav>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/services" element={<Services></Services>}></Route>
      <Route path="*" element={<NotFound></NotFound>}></Route>
      <Route path="/reserve" element={<ReserveWasher></ReserveWasher>}></Route>
      <Route path="/schedule" element={<SchedulePickUp></SchedulePickUp>}></Route>
    </Routes>
    <nav><Footer></Footer></nav>
  </>

  );
}

export default App;
