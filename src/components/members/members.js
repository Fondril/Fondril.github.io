import React, { useState } from 'react';
import './members.css';
import picture1 from '../../assets/circlegarfield.png';
import downArrow from '../../assets/down-arrow.png';
import upArrow from '../../assets/up-arrow.png'
import membersList from './memberslist.js';
import { Link } from 'react-router-dom';

const memberList = (item, index) => {
      let position = 0;
      if (index%2===0){
            position = 'left-object object';
      } else {
            position = 'right-object object'
      }
      return (
            <div className={position}>
                  <img className='object-picture' src={picture1} alt='member'/>
                  <div className='object-text'>
                        <div className='member-name'>{item.memberName}</div>
                        <div className='member-note'>{item.memberNote}</div>
                        <div className='object-invis-div'></div>
                  </div>
            </div>
      );
      
}

function Members() {
      const [listState, setListState] = useState('short')
      const handleDownArrow = () =>{
            setListState('long')
      }
      const handleUpArrow = () =>{
            setListState('short')
      }

      if(listState === 'short'){
            return (
            <div id="members" className="members">
                        <div className='header'>Members</div>

                        <div className='members-wrapper'>
                              {membersList.map((item, index) => memberList(item, index))}
                        </div>

                        <div className='button-and-arrow'>
                              <Link className='view-all-button' to='/members'>View all Members!</Link>
                              <div className='arrow-wrapper' onClick={handleDownArrow}><img className='arrow' src={downArrow} alt='down arrow'></img></div>
                              <div className='invis-div'></div>
                              
                              
                        </div>
            </div>
      )}
      if(listState === 'long'){
            return (
                  <div id="members" className="members">
                              <div className='header'>Members</div>
      
                              <div className='members-wrapper'>
                                    {membersList.map((item, index) => memberList(item, index))}
                              </div>
      
                              <div className='button-and-arrow'>
                                    <Link className='view-all-button' to='/members'>View all Members!</Link>
                                    <div className='arrow-wrapper' onClick={handleUpArrow}><img className='arrow' src={upArrow} alt='up arrow'></img></div>
                                    <div className='invis-div'></div>
                                    
                                    
                              </div>
                  </div>
      )}
}

export default Members;