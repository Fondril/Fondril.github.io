import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './logIn.scss';

export default function LogIn () {

      const [userName, setUserName] = useState('')
      const [pass, setPass] = useState('')
      const [logInMode, setLogInMode] = useState('success')
      const navigate = useNavigate()

      const handleLogInClick = () =>{
            if (userName === 'fondidia' && pass === 'fondidia')
            {
                  navigate("/home")
            }
            else {
                  setLogInMode("fail")
            }
      }
      const handleLeaveClick = () =>{
            setLogInMode("success")
      }
      const handleEnterKeyPress = (e) =>{
            if(e.key === 'Enter'){
                  handleLogInClick()
            }
      }

      if (logInMode === "success"){
            return(
                  <div className="background">
                        <div className="logIn">
                              <div className="logInForm">
                                    <div className="input">
                                          <div className="inputTag">Username</div>
                                          <input type='text' onChange={(e => {setUserName(e.target.value)})} onKeyUp={handleEnterKeyPress} className="inputText" placeholder="supermario66"></input>
                                    </div>
                                    <div className="input">
                                          <div className="inputTag">Password</div>
                                          <input className='inputText' onChange={(e => {setPass(e.target.value)})} onKeyUp={handleEnterKeyPress} type='password' placeholder="****"></input>
                                    </div>
                              </div>
                              <div className="logInButtons">
                                    <div className='button' type='button' onClick={handleLogInClick} >Log in!</div>
                              </div>
                        </div>
                  </div>
      )}
      if(logInMode === "fail") {
            return(
                  <div className="background">
                        <div className="logIn">
                              <div className="text">You do not belong. Please Leave</div>
                              <div className="button" type="button" onClick={handleLeaveClick}>Leave</div>
                        </div>
                  </div>
      )}

}