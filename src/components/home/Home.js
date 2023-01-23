import React from 'react';
import './index.css';

const Home = () => {
  return (
    <div className='home-container'>



      <div className='home'>


        {/* <div className='welcome-message'>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
        </div> */}

        <div className='button-container'>

          <div>
            <button className='reserve-btn'>
              <a className="btn-link" href="/reservewasher">Reserve Here</a>
            </button>
          </div>


          <div>
            <button className='schedule-btn'>
              <a className="btn-link" href="/schedulepickUp">Schedule Here</a>
            </button>
          </div>

        </div>


      </div>


    </div>
  )
}

export default Home