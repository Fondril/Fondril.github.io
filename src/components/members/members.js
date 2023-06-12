import React from 'react';
import './members.css';
import picture1 from '../../assets/circlegarfield.png';
import downArrow from '../../assets/down-arrow.png';
import membersList from './memberslist.js';


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
  return (
    <div id="members" className="members">
            <div className='header'>Members</div>

            <div className='members-wrapper'>
                  {membersList.map((item, index) => memberList(item, index))}
            </div>

            <div className='button-and-arrow'>
                  <div className='view-all-button'>View all Members!</div>
                  <div className='arrow-wrapper'><img className='arrow' src={downArrow} alt='down arrow'></img></div>
                  <div className='invis-div'></div>
                  
                  
            </div>
    </div>
  );
}

export default Members;