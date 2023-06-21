import React from "react";
import './allMembers.css';
import searchIcon from '../../assets/searchButton.jpg'
import fondidiaMembers from "../../assets/fondidiaMembers";

let memberIndex = 0;

const singleMemberMediaUploads = (member) => {
      return(
            member.projects.map(element => {
                  return (
                              <div className="singleMemberUploadsChild">
                                          {element.icon}
                                    <div className="singleMemberUploadsChildInfo">
                                          <div className="font21">{element.projectName}</div>
                                          <div className="singleMemberUploadsChildText">{element.description}</div>
                                    </div>
                              </div>)}))}


const singleMemberSkillChildren = (member) => {
      return(
            member.skills.map((value) => {
                  return(
                        <div className="singleMemberSkillsChild">
                              <div className="singleMemberSkillsChildIcon"></div>
                              <div>{value}</div>
                        </div>)}))}



const singleMember = (memberIndex) => {
      return(
            <div className="singleMember">
            <div className="singleMemberHeader">
                  <div className="singleMemberProfilePic"><img className="singleMemberProfilePic" src={require('../../assets/profilePics/Uzi-pofilePic.png')} alt="Profile pic"/></div>
                  <div className="singleMemberProfile">
                        <div className="singleMemberProfileName">{fondidiaMembers[memberIndex].name} {fondidiaMembers[memberIndex].lastName} AKA {fondidiaMembers[memberIndex].disName}</div>
                        <div className="singleMemberProfileStatsWrapper font21">Stats</div>
                        <div className="singleMemberProfileStats">
                              <div className="singleMemberProfileStatsLeft">
                                    <div className="displayFlex">
                                          <div>Stamina</div>
                                          <div>{fondidiaMembers[memberIndex].stats.stamina}/10</div>
                                    </div>
                                    <div className="displayFlex">
                                          <div>Defence</div>
                                          <div>{fondidiaMembers[memberIndex].stats.defence}/10</div>
                                    </div>
                                    <div className="displayFlex">
                                          <div>Strenght</div>
                                          <div>{fondidiaMembers[memberIndex].stats.strenght}/10</div>
                                    </div>
                              </div>
                              <div className="singleMemberProfileStatsRight">
                              <div className="displayFlex">
                                          <div>Agiliy</div>
                                          <div>{fondidiaMembers[memberIndex].stats.agility}/10</div>
                                    </div>
                                    <div className="displayFlex">
                                          <div>Charisma</div>
                                          <div>{fondidiaMembers[memberIndex].stats.charisma}/10</div>
                                    </div>
                                    <div className="displayFlex">
                                          <div>Intelect</div>
                                          <div>{fondidiaMembers[memberIndex].stats.intelect}/10</div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>

            {/* to be added */}

            <div className="singleMemberAchievements">
                  <div className="singleMemberAchievementsIcon"></div>
                  <div className="singleMemberAchievementsIcon"></div>
                  <div className="singleMemberAchievementsIcon"></div>
            </div>

            <div className="singleMemberAbout">
                  <div className="font21">About</div>
                  <div className="singleMemberAboutText">
                        {fondidiaMembers[memberIndex].about}
                  </div>
            </div>

            <div className="singleMemberSkills">
                  <div className="font21">Skills</div>
                  <div className="singleMemberSkillsWrapper">

                        {singleMemberSkillChildren(fondidiaMembers[memberIndex])}

                  </div>
            </div>

            <div className="singleMemberUploads">
                  <div className="font21">Media uploaded</div>
                  <div className="singleMemberUploadsMediaWrapper">

                        {singleMemberMediaUploads(fondidiaMembers[memberIndex])}

                  </div>
            </div>
      </div>
      )
}

const memberListChildren = () => {
      return(
            fondidiaMembers.map( element => {
                  console.log(element.profilePic)
                  // const a = element.profilePic.toString()
                  // console.log(a)
                  return(
                        <div className="memberListChild">
                              <div className="memberListChildProfilePic">
                                    {/* <img className="memberListChildProfilePic" src={require(a)} alt="Profile pic"/> */}
                                    <img className="memberListChildProfilePic" src={require('../../assets/profilePics/Uzi-pofilePic.png')} alt="Profile pic"/>
                              </div>
                              <div className="memberListChildDisName">{element.disName}</div>
                        </div>
                  )
            })
      )
}


function AllMembers () {
      return (
            <div className="allMembers">



                  <div className="searchBarWrapper">
                        <input className='searchBar' type="text" placeholder="Search member"></input>
                        <div className="searchIcon" ><img src={searchIcon} className="searchIcon" alt="Search icon"/></div>
                  </div>

                  {/* List of all members */}

                  <div className="memberListWrapper">

                        {memberListChildren()}

                  </div>

                  {/* Single member information */}

                  {singleMember(memberIndex)}

            </div>
      )
}

export default AllMembers;