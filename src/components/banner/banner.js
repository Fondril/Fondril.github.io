import React from 'react';
import './banner.css';
import akalibackground from '../../assets/akalibackground.png';

function Banner () {

  return (
      
    <div className="banner">
            <div className='bannernamewrapper'>
                  <div className='bannername'>
                        Fondidia
                  </div>
            </div>
            <img className='bannerimage' src={akalibackground} alt='wheres the banner?!'/>
            <div className='bannerfiller'></div>
    </div>
  );
}

export default Banner;