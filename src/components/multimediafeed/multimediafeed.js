import React from 'react';
import './multimediafeed.css';
import leftarrow from '../../assets/multimedia-feed-arrow-to-left.png';
import rightarrow from '../../assets/multimedia-feed-arrow-to-right.png';
import './mainwindow.css';
import featuredProjects from './projects';

const projectsIndex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

const feedcase = (window, index) => {
      return (
            <div className={window}>
                  <div className='mmf-media'>
                        {featuredProjects[index].picture}
                        <div className='mmf-submit-name-wrapper'>
                              <div className='mmf-submit-text'>Subbmited by: </div><hr />
                              <div className='mmf-submit-name'>{featuredProjects[index].author}</div>
                        </div>
                  </div>
                  <div className='mmf-text-wrapper'>
                        <p className='mmf-text-header'>{featuredProjects[index].projectname}</p>
                        <p className='mmf-text'>{featuredProjects[index].description}</p>
                  </div>
            </div>
      );
}

function MultimediaFeed({ multiMediaFeedIndex, multiMediaFeedLeftArrow, multiMediaFeedRightArrow }) {


      return (
            <div id="multim" className="multimedia-feed-container">

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
                        {projectsIndex.map(item => feedcase('feed-window', item))}
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