import React from 'react';
import './multimediafeed.css';
import leftarrow from '../../assets/multimedia-feed-arrow-to-left.png';
import rightarrow from '../../assets/multimedia-feed-arrow-to-right.png';
import './mainwindow.css';
import featuredProjects from './projects';


const feedcase = ( item, window ) => {
      return (
      <div className={window} key={item.projectname}>
            <div className='mmf-media'>
                  {item.picture}
                  <div className='mmf-submit-name-wrapper'>
                        <div className='mmf-submit-text'>Subbmited by: </div><hr/>
                        <div className='mmf-submit-name'>{item.author}</div>
                  </div>
            </div>
            <div className='mmf-text-wrapper'>
                  <p className='mmf-text-header'>{item.projectname}</p>
                  <p className='mmf-text'>{item.description}</p>
            </div>
      </div> 
);}

function MultimediaFeed ({multiMediaFeedIndex, multiMediaFeedLeftArrow, multiMediaFeedRightArrow}) {

      let indexLeft = multiMediaFeedIndex-1;
      if (indexLeft === -1){
            indexLeft = 11
      }
      let indexRight = multiMediaFeedIndex+1;
      if(indexRight === 12){
            indexRight = 0
      }


  return (
    <div id="multim" className="multimedia-feed-container">
            
            {/* Feed filters */}
            <div id='mmf-navbar' className='multimedia-feed-navbar'>
                  <div className='mmf-navbar-element active padding'>All</div>
                  <div className='mmf-navbar-element'>Games</div>
                  <div className='mmf-navbar-element'>Pictures</div>
                  <div className='mmf-navbar-element'>Videos</div>
                  <div className='mmf-navbar-element'>Music</div>
                  <div className='mmf-navbar-element'>Written Media</div>
                  <div className='mmf-navbar-element'>Other</div>
            </div>
            
            {/* Main window */}
            <div className='mmf-feed-scroll'>
                  {feedcase(featuredProjects[indexLeft], 'left-window')}
                  {feedcase(featuredProjects[multiMediaFeedIndex], 'active-window')}
                  {feedcase(featuredProjects[indexRight], 'right-window')}
            </div>

            {/* // Buttons // */}
            <div className='buttons'>
                  <div className='multimedia-feed-button' type='button' >View all Multimedia!</div>

                  <div className='arrows'>
                        <div className='left-arrow-wrapper' type='button' onClick={multiMediaFeedLeftArrow}> 
                              <img className='mmf-arrow' src={leftarrow} alt='' /> 
                        </div>
                        <div className='right-arrow-wrapper' type='button' onClick={multiMediaFeedRightArrow}>
                              <img className='mmf-arrow' src={rightarrow} alt='' />
                        </div>
                  </div>
            </div>
    </div>
  );
}

export default MultimediaFeed;