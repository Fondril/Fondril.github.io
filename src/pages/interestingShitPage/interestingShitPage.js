import React from "react";
import Navig from "../../components/navigation/Nav"
import './interestingShitPage.scss'
import backgroundImage from '../../assets/underConstrucion.jpg'

const InterestingShitPage = () =>{
      return(
            <div>
                  <Navig/>
                  <img className="underConstructionBackground" src={backgroundImage} alt="Under Construction" />
            </div>
      )
}

export default InterestingShitPage;