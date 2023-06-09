import React, { useState } from 'react';
import Nav from './components/navigation/Nav.js';
import Banner from './components/banner/banner.js';
import Members from './components/members/members.js';
import MultimediaFeed from './components/multimediafeed/multimediafeed.js';
import DnD from './components/dnd/dnd.js';
import Footer from './components/footer/footer.js';
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
                        index = 11 :
                        index = multiMediaFeedIndex - 1;
                  return index;
            });
      }
      const multiMediaFeedRightArrow = () => {
            setMultimediafeedindex((multiMediaFeedIndex) => {
                  let index = multiMediaFeedIndex;
                  multiMediaFeedIndex === 11 ?
                        index = 0 :
                        index = multiMediaFeedIndex + 1;
                  return index;
            });
      }

      return (
            <div className="App">
                  <Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                  <Banner />
                  <Members />
                  <MultimediaFeed multiMediaFeedIndex={multiMediaFeedIndex} multiMediaFeedRightArrow={multiMediaFeedRightArrow} multiMediaFeedLeftArrow={multiMediaFeedLeftArrow} />
                  <DnD/>
                  <Footer/>
            </div>
      );
}

export default App;
