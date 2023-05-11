import React from 'react';
import './multimediafeed.css';
import leftarrow from '../../assets/multimedia-feed-arrow-to-left.png';
import rightarrow from '../../assets/multimedia-feed-arrow-to-right.png';
import './mainwindow.css';
import featuredProjects from './projects';

const feedcase = ( item ) => {
      return (
      <div className={'feed-window'} key={item.projectname}>
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


  return (
    <div className="multimedia-feed-container">

            <div id='mmf-navbar' className='multimedia-feed-navbar'>
                  <div className='mmf-navbar-element active padding'>All</div>
                  <div className='mmf-navbar-element'>Games</div>
                  <div className='mmf-navbar-element'>Pictures</div>
                  <div className='mmf-navbar-element'>Videos</div>
                  <div className='mmf-navbar-element'>Music</div>
                  <div className='mmf-navbar-element'>Written Media</div>
                  <div className='mmf-navbar-element'>Other</div>
            </div>

            <div className='mmf-feed-scroll'>
                                    {featuredProjects.map(item => feedcase(item))}
            </div>

            <div className='left-arrow-wrapper' type='button' onClick={multiMediaFeedLeftArrow}> 
                  <img className='mmf-arrow' src={leftarrow} alt='' /> 
            </div>

            <div className='right-arrow-wrapper' type='button' onClick={multiMediaFeedRightArrow}>
                  <img className='mmf-arrow' src={rightarrow} alt='' />
            </div>

            <div className='multimedia-feed-button' type='button'>View all Multimedia!</div>
    </div>
  );
}

export default MultimediaFeed;