import React from 'react';
import './multimediafeed.css';
import multimediafeedbackground from '../../assets/multimedia-feed-background-2.png';
import leftarrow from '../../assets/multimedia-feed-arrow-to-left.png';
import rightarrow from '../../assets/multimedia-feed-arrow-to-right.png';



function MultimediaFeed ({multiMediaFeedIndex, multiMediaFeedLeftArrow, multiMediaFeedRightArrow}) {
      const feed = () => {
            switch(multiMediaFeedIndex) {
      
                  case 0:   return <div className='multimedia-feed-main-window-wrapper'></div>
                  case 1:   return <div className='case1'></div>
                  case 2:   return <div className='case2'></div>
      
              default:      return <div className='case2'></div>
            }
      }
  return (
    <div className="multimedia-feed-container">
            <div className='multimedia-feed-bar'></div>
            <img  className='multimedia-feed-background-image' src={multimediafeedbackground} alt=''></img>
            <div>
                   {feed()}
            </div>
            <div className='multimedia-feed-left-arrow' type='button' onClick={multiMediaFeedLeftArrow}> <img src={leftarrow} alt='' /> </div>
            <div className='multimedia-feed-right-arrow' type='button' onClick={multiMediaFeedRightArrow}><img src={rightarrow} alt='' /></div>
            <div className='multimedia-feed-button' type='button'>View all Multimedia!</div>
    </div>
  );
}

export default MultimediaFeed;