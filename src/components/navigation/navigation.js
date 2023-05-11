import React from 'react';
import './navigation.css';
import leftchevron from '../../assets/left-chevron.png';
import rightchevron from '../../assets/right-chevron.png';

const Navigation = ({ navbutton, buttonClicked}) => {
      console.log(navbutton)
            return (
                  <div className='navbarwrapper'>
                        { navbutton === true?
                              <div className="navbar">
                                          <div className='navbarmainarea'>
                                                <div className='navlinks'>Theme</div>
                                                <div className='navlinks'>Multimedia</div>
                                                <div className='navlinks'>Interesting Shit</div>
                                                <div className='navlinks'>Latest Multimedia</div>
                                                <div className='navlinks'>Members</div>
                                                <div className='navlinks'>Online</div>
                                                <div className='navlinks'>Discord</div>
                                                <div className='navlinks'>Donation</div>
                                                <div className='navlinks'>Sign Out</div>
                                          </div>
                                          <div className='navbarbuttonarea'>
                                                <div className='navbar-button-wrapper' type='button' onClick={buttonClicked}> 
                                                      <img className='navbar-button' src={leftchevron} alt='arrow to da waaall'  />
                                                </div>
                                          </div>
                              </div>
                        :
                               <div className='navbar-button-without-menu-wrapper' onClick={buttonClicked}> 
                                           <img className='navbar-button-without-menu' src={rightchevron} alt='tooo the wiindow' />
                              </div>
                        }
                  </div>
             );
      }


export default Navigation;