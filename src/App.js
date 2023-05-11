import React, { useState } from 'react';
import Banner from './components/banner/banner.js';
import Nav from './components/navigation/Nav.js';
import MultimediaFeed from './components/multimediafeed/multimediafeed.js';
import Members from './components/members/members.js';
import './App.css';

const App = () => {
      const [multiMediaFeedIndex, setMultimediafeedindex] = useState(0)
      const [darkMode, setDarkMode] = React.useState(false)

      function toggleDarkMode() {
            setDarkMode(prevMode => !prevMode)
      }

      const multiMediaFeedLeftArrow = () => {
            setMultimediafeedindex((multiMediaFeedIndex) => {
                  let index = multiMediaFeedIndex;
                  multiMediaFeedIndex === 0 ?
                        index = 4 :
                        index = multiMediaFeedIndex - 1;
                  return index;
            });
      }
      const multiMediaFeedRightArrow = () => {
            setMultimediafeedindex((multiMediaFeedIndex) => {
                  let index = multiMediaFeedIndex;
                  multiMediaFeedIndex === 4 ?
                        index = 0 :
                        index = multiMediaFeedIndex + 1;
                  return index;
            });
      }

      return (
            <div className="App">
                  <Banner />
                  <Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                  <MultimediaFeed multiMediaFeedIndex={multiMediaFeedIndex} multiMediaFeedRightArrow={multiMediaFeedRightArrow} multiMediaFeedLeftArrow={multiMediaFeedLeftArrow} />
                  <Members />
            </div>
      );
}

export default App;
