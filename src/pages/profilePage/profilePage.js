import React from "react";
import Navig from "../../components/navigation/Nav"
import './profilePage.scss'
import backgroundImage from '../../assets/underConstrucion.jpg'

const ProfilePage = () =>{
      return(
            <div>
                  <Navig/>
                  <img className="underConstructionBackground" src={backgroundImage} alt="Under Construction" />
            </div>
      )
}

export default ProfilePage;