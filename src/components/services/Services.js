import React from 'react';
import { useRef } from 'react';
import './index.css';

const Services = () => {

  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   emailjs.sendForm('service_ekwtdxq', 'template_5z7s9rg', form.current, 'JNVWABibGcs4-PFua')
  //   e.target.reset()
  // };


  return (
    <>
      <div className='services-container'>
        <div className='card'>
          <div className='header'>
            <img src="https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="img-fluid rounded-start" alt="..." />
          </div>
          <div className='card-body'>
            <div className='card-title'>
              <h5>Wash</h5>
            </div>
            <div className='service-description'>
              <p >This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div className='service-footer'>
              <p><small>something else</small></p>
            </div>
          </div>
        </div>

        <div className='card'>
          <div className='header'>
            <img src="https://images.unsplash.com/photo-1550025005-05b9002486c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80" />
          </div>
          <div className='card-body'>
            <div className='card-title'>
              <h5>Dry</h5>
            </div>
            <div className='service-description'>
              <p >This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div className='service-footer'>
              <p><small>something else</small></p>
            </div>
          </div>
        </div>


        <div className='card'>
          <div className='header'>
            <img src="https://images.unsplash.com/photo-1591369839359-e1e548de744e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" />
          </div>
          <div className='card-body'>
            <div className='card-title'>
              <h5>Pick Up</h5>
            </div>
            <div className='service-description'>
              <p >This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div className='service-footer'>
              <p><small>something else</small></p>
            </div>
          </div>
        </div>



      </div>


    </>

  )

}

export default Services