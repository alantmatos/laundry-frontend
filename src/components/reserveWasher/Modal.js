import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import ReserveWasher from './ReserveWasher';

const Modal = ({ setModalDisplay, modalDisplay, setWasherCard, washerCard, selectedWasher }) => {

  const [username, setname] = useState();
  const is_active = true;
  const washer_id = selectedWasher.size;

  const [reservation, SetLocalDateTime] = useState();
  const [isLoading, setIsLoading] = useState();
  const [errors, setErrors] = useState();

  function manageModal() {
    setModalDisplay(!modalDisplay);
    setWasherCard(!washerCard);
  };


  function reservationPOST(e) {
    console.log(reservation)

    fetch('http://localhost:3000/reservations', {
      method: 'POST',
      headers: { 'Content-type': 'application/json', },
      body: JSON.stringify({ username, is_active, reservation, washer_id })
    })
      .then(res => res.json())
      .then(res => console.log(res))
  }



  const form = useRef();


  const managerequest = (e) => {
    e.preventDefault();
    // emailjs.sendForm('service_ekwtdxq', 'template_5z7s9rg', form.current, 'JNVWABibGcs4-PFua')
    // e.target.reset();
    reservationPOST(e)
  };



  return (
    <div className='row row-cols modal-container'>

      <div className='col-12 modal-form'>

        <form className="validated-form request-form" ref={form} onSubmit={managerequest} noValidate>
          <div className="mb-1">
            <label className="form-label" htmlFor="name">Name</label>
            <input className="form-control" type="text" id="name" name="name" required onChange={(e) => { setname(e.target.value) }} />
          </div>

          <div className="mb-3 form-group">
            <label className="form-label" htmlFor="datetime">Date and Time</label>
            <input className="form-control" id="datetime-local" name="datetime-local" placeholder="MM/DD/YYY" type="datetime-local" onChange={(e) => { SetLocalDateTime(e.target.value) }} />
          </div>


          <div className='bts-card'>
            <button className='btn btn-success' type='submit'>Reserve</button>
            <button onClick={() => { manageModal() }} className='btn btn-danger'>Cancel</button>
          </div>


        </form>

      </div>

    </div>
  )
}

export default Modal