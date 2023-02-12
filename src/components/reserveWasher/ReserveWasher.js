import React from 'react';
import { useState, useEffect } from 'react';
import Modal from './Modal';
import './index.css';

const ReserveWasher = () => {

  const [swasher, setSwasher] = useState();
  const [mwasher, setMwasher] = useState();
  const [lwasher, setLwasher] = useState();
  const [modalDisplay, setModalDisplay] = useState(false);
  const [washerCard, setWasherCard] = useState(true);
  const [selectedWasher, setSelectedWasher] = useState();


  useEffect(() => { getSmallWasher() }, [])
  useEffect(() => { getMediumWasher() }, [])
  useEffect(() => { getLargeWasher() }, [])

  function getSmallWasher() {
    fetch('http://localhost:3000/swasher')
      .then(res => res.json())
      .then(res => setSwasher(res))
  };

  function getMediumWasher() {
    fetch('http://localhost:3000/mwasher')
      .then(res => res.json())
      .then(res => setMwasher(res))
  };

  function getLargeWasher() {
    fetch('http://localhost:3000/lwasher')
      .then(res => res.json())
      .then(res => setLwasher(res))
  };

  function reserveWasher(washer) {
    console.log("User selected Washer: ", washer)
    setSelectedWasher(washer)
    setWasherCard(!washerCard)
    setModalDisplay(!modalDisplay)
  }




  return (
    <div className="washer-container">
    {modalDisplay ? <Modal setModalDisplay={setModalDisplay} modalDisplay={modalDisplay} setWasherCard={setWasherCard} washerCard={washerCard} selectedWasher={selectedWasher}></Modal> : null}
    

    {washerCard ?
    <div>
    {swasher ? <div className="washer-card" key={swasher.id}>
      <img src={swasher.image} className="washer-card-img" alt="washer machine image" />
      <div className="card-body">
        <h5 className="card-title">Small</h5>
        <button type='submit' className="reserve-washer-btn" onClick={(e) => { reserveWasher(swasher) }}>Reserve</button>
      </div>
    </div> : null}

    {mwasher ? <div className="washer-card" key={mwasher.id}>
      <img src={swasher.image} className="washer-card-img" alt="washer machine image" />
      <div className="card-body">
        <h5 className="card-title">Medium</h5>
        <button type='submit' className="reserve-washer-btn" onClick={(e) => { reserveWasher(mwasher) }}>Reserve</button>
      </div>
    </div> : null}

    {lwasher ? <div className="washer-card" key={lwasher.id}>
      <img src={swasher.image} className="washer-card-img" alt="washer machine image" />
      <div className="card-body">
        <h5 className="card-title">Large</h5>
        <button type='submit' className="reserve-washer-btn" onClick={(e) => { reserveWasher(lwasher) }}>Reserve</button>
      </div>
    </div> : null}


    
    </div> : null }



  </div>
  )
}

export default ReserveWasher