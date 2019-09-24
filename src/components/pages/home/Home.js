import React from 'react';

import './Home.scss';

const Home = () => {
  return (
    <div>
      <div className='hero'>
        <div className='container large'>
          <h1>
            <span className='text-primary'>Central Texas</span> Tours
          </h1>
        </div>
      </div>

      <div className='banner bg-primary'>
        <div className='list text-center'>
          <i className='fas fa-map-marked-alt'></i>
          <h4>Location Variety</h4>
          <h6 className='list-li'>Customized Tour Packages</h6>
        </div>
        <div className='list text-center'>
          <i className='fas fa-mobile-alt'></i>
          <h4>24 Hour Support</h4>
          <h6 className='list-li'>Local Agents On Call</h6>
        </div>
        <div className='list text-center'>
          <i className='fas fa-hand-holding-usd'></i>
          <h4>Affordable Rates</h4>
          <h6 className='list-li'>Industry Leading Pricing</h6>
        </div>
      </div>

      <div className='wrapping'>
        <h2>Popular Tours</h2>
        <div className='top-tours'>
          <div>
            <h2>Austin Downtown</h2>
          </div>
          <div>
            <h2>Bluebonnets</h2>
          </div>
          <div>
            <h2>Bicycle Austin</h2>
          </div>
          <div>
            <h2>Capitol</h2>
          </div>
          <div>
            <h2>Hamilton's Pool</h2>
          </div>
          <div>
            <h2>Ranches</h2>
          </div>
          <div>
            <h2>Street Art</h2>
          </div>
          <div>
            <h2>Battleship Texas</h2>
          </div>
          <div>
            <h2>San Antonio</h2>
          </div>
          <div>
            <h2>Hip Cafes</h2>
          </div>
        </div>
      </div>

      <div className='banner-secondary text-white'>
        <i className='far fa-clock fa-4x my'></i>
        <h2>Cost Free Cancellation</h2>
        <p>Cancel within 24 hours and pay nothing.</p>
      </div>

      <div className='hero-secondary text-white'>
        <div>
          <i className='far fa-star'></i> <i className='far fa-star'></i>{' '}
          <i className='far fa-star'></i> <i className='far fa-star'></i>{' '}
          <i className='far fa-star'></i>
          <h3>Rated Five Stars</h3>
        </div>
      </div>

      <div className='footer badge-primary'></div>
    </div>
  );
};

export default Home;
