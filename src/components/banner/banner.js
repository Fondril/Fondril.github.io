import React from 'react';
import './banner.css';
import akalibackground from '../../assets/akalibackground.png';

function Banner (props) {

  return (
      
    <div id="banner" className="banner">
            <div className='bannernamewrapper'>
                  <div className={props.darkMode? 'dark_bannername':'bannername'}>
                        Fondidia
                  </div>
            </div>
            <img className='bannerimage' src={akalibackground} alt='wheres the banner?!'/>
            <div className='bannerfiller'></div>
    </div>
  );
}

export default Banner;