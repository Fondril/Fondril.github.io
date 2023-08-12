import React from "react";
import './multimediaPage.scss'
import Navig from "../../components/navigation/Nav"
import backgroundImage from '../../assets/underConstrucion.jpg'

const multimediaPage = () => {
      return(
            <div>
                  <Navig/>
                  <img className="underConstructionBackground" src={backgroundImage} alt="Under Construction" />
            </div>
      )
}

export default multimediaPage;