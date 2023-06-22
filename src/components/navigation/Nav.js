import styles from "./Nav.module.css"
import React from 'react'

import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/akalilogo.png';


// Nav component
export default function Navig(props) {

    return (
        <Navbar className={props.darkMode ? `${styles.navDark} flex align-items-center` : `${styles.nav} flex align-items-center`} id="nb" expand="lg">
            <Navbar.Toggle />
            <ul className={`flex align-items-center ${styles["navbar-nav1"]}`}>
                <Link to='/'>
                    <img className={`${styles["logo"]}`} src={logo} alt="logo" />
                </Link>
                <Link className={`${styles["nav-item"]}`} to='/members'>
                    Members
                </Link>
                <NavDropdown
                    id="nav-dropdown"
                    title="Multimedia"
                    menuVariant= "light"
                    className={`${styles["nav-item"]}`}
                >
                    <NavDropdown.Item href="#multim">Games</NavDropdown.Item>
                    <NavDropdown.Item href="#">Pictures</NavDropdown.Item>
                    <NavDropdown.Item href="#">Videos</NavDropdown.Item>
                    <NavDropdown.Item href="#">Written media</NavDropdown.Item>
                    <NavDropdown.Item href="#">Music</NavDropdown.Item>
                    <NavDropdown.Item href="#">Other</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                    id="nav-dropdown"
                    title="Interesting Shit"
                    menuVariant= "light"
                    className={`${styles["nav-item"]}`}
                >
                    <NavDropdown.Item href="#">Page 1</NavDropdown.Item>
                    <NavDropdown.Item href="#">Page 2</NavDropdown.Item>
                    <NavDropdown.Item href="#">Page 3</NavDropdown.Item>
                </NavDropdown>
            </ul>
            <div className={`${styles["toggler"]}`}>
                <p className={`${styles["toggler--light"]}`}>Light</p>
                <div
                    className={`${styles["toggler--slider"]}`}
                    onClick={props.toggleDarkMode}
                >
                    <div className={`${styles["toggler--slider--circle"]}`}></div>
                </div>
                <p className={`${styles["toggler--dark"]}`}>Dark</p>
            </div>
        </Navbar>
    )
}
