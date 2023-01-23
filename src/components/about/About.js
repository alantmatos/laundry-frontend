import React from 'react';
import './index.css';

const AboutUs = () => {
  return (
    <div className="col about-container">




      {/* image */}
      <div className="col-6 offset-3">
        <h1 className="text-center">Mission</h1>
        <p className="text-center">
          To provide a consistently clean, friendly, reliable washing and drying service with its other options to the surrounding community.
        </p>
      </div>

      {/* about us */}

      <div className="col-6 offset-3">
        <h1 className="text-center"> Who we are</h1>
        <p className="text-center">
          The shop is a coin operated washer dryer laundry store, which is dedicated to high customer satisfaction by our new reliable machines, clean space, friendly and helpful atmosphere at competitive prices.
        </p>
      </div>


    </div>
  )
}

export default AboutUs