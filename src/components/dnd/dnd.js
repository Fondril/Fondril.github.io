import React from 'react';
import './dnd.css';
import fondidialogo from '../../assets/fondidialogo.png';

function DnD () {
      return(
            <div className='dnd'>

                  <div className='donation-header'>Donation</div>

                  <div className='logo-i-racun'>
                        <div className='disc-logo'><img className='picture' src={fondidialogo} alt='logo'/></div>
                        <div className='racun'>
                              <div className='br-racuna'>205-9001021804338-94</div>
                              <div>Marko Jovanović</div>
                        </div>
                  </div>

                  <div className='main'>

                        <div className='div1'>
                                    <div className='achiev'></div>
                              <div className='div12'>
                                    <div>Najvise sati</div>
                                    <div className='discord'>Discord</div>
                              </div>
                        </div>

                        <div className='div2'>
                              
                        </div>

                        <div className='div3'>
                                    <div className=''>Najvise poruka</div>
                                    <div className='achiev'></div>
                        </div>

                        <div className='div4'>Hvala!</div>

                  </div>

            </div>
      );
}

export default DnD;