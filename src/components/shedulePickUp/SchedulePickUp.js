import React from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './index.css'

const SchedulePickUp = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_ekwtdxq', 'template_5z7s9rg', form.current, 'JNVWABibGcs4-PFua')
    e.target.reset()
  };


  return (


    <div className="schedule-container">
      <div>
      <h1 className="schedule-title">Schedule a pick up</h1>
      <form className="" ref={form} onSubmit={sendEmail} noValidate>
        <div className="">
          <label className="" htmlFor="name">Name</label>
          <input className="" type="text" id="name" name="name" required />
        </div>
        <div className="">
          <label className="" htmlFor="address">Address</label>
          <input className="" type="text" id="address" name="address" required />
        </div>
        <div className="">
          <label className="" htmlFor="email">Email</label>
          <input className="" type="text" id="email" name="email" required />
        </div>
        <div className="">
          <label className="" htmlFor="phone">Phone</label>
          <input className="" type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
        </div>

        <div className="">
          <label className="" htmlFor="date">Date</label>
          <input className="" id="date" name="date" placeholder="MM/DD/YYY" type="date" />
        </div>

        <div className="">
          <label className="" htmlFor="message">Message</label>
          <textarea className="schedule-message" type="text" id="message" name="message" required></textarea>
        </div>
        <button className="">Send Request</button>
        <a className="" href="/">Cancel</a>
      </form>
      </div>

    </div>


  )
}

export default SchedulePickUp