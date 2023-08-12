import React, { useState } from 'react';
import './homePage.css';

import Navig from '../../components/navigation/Nav';
import Banner from '../../components/banner/banner.js';
import Members from '../../components/members/members.js';
import MultimediaFeed from '../../components/multimediafeed/multimediafeed.js';
import DnD from '../../components/dnd/dnd.js';
import Footer from '../../components/footer/footer.js';


const HomePage = () => {

      const [multiMediaFeedIndex, setMultimediafeedindex] = useState(0)
      
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
            <div className="homePage">
                        <Navig />
                        <Banner/>
                        <Members />
                        <MultimediaFeed multiMediaFeedIndex={multiMediaFeedIndex} multiMediaFeedRightArrow={multiMediaFeedRightArrow} multiMediaFeedLeftArrow={multiMediaFeedLeftArrow} />
                        <DnD/>
                        <Footer/>
            </div>
      );
}

export default HomePage;