import React, { useState } from 'react';
import Banner from './components/banner/banner.js';
import Navigation from './components/navigation/navigation.js';
import MultimediaFeed from './components/multimediafeed/multimediafeed.js';
import Members from './components/members/members.js';
import './App.css';

const App = () => {
      const [navbutton, setNavbutton] = useState(true)
      const [multiMediaFeedIndex, setMultimediafeedindex] = useState(0)

      const multiMediaFeedLeftArrow = () => {
            setMultimediafeedindex((multiMediaFeedIndex) => {
                  let index = multiMediaFeedIndex;
                  multiMediaFeedIndex === 0?
                        index = 2 :
                        index = multiMediaFeedIndex-1;
                  return index;
            });
      }
      const multiMediaFeedRightArrow = () => {
            setMultimediafeedindex((multiMediaFeedIndex) => {
                  let index = multiMediaFeedIndex;
                  multiMediaFeedIndex === 2?
                        index = 0 :
                        index = multiMediaFeedIndex+1;
                  return index;
            });
      }

       const onButtonClicked = () => {
            setNavbutton(!navbutton);
      }
            return (
                  <div className="App">
                              <Banner />
                              <Navigation  navbutton={navbutton} buttonClicked={onButtonClicked}/>
                              <MultimediaFeed multiMediaFeedIndex={multiMediaFeedIndex} multiMediaFeedRightArrow={multiMediaFeedRightArrow} multiMediaFeedLeftArrow={multiMediaFeedLeftArrow} />
                              <Members />
                  </div>
            );
      }

export default App;
