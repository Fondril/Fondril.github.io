import styles from "./Nav.module.css"
import React from 'react'
// import { useTheme, useThemeUpdate } from "../../logic/themeContext";

import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';


// Nav component
export default function Navig(props) {

      // const darkMode = useTheme()
      // const toggleDarkMode = useThemeUpdate()

    return (
        <Navbar className={props.darkMode ? `${styles.navDark} flex align-items-center` : `${styles.nav} flex align-items-center`} id="nb" expand="lg">
                <Navbar.Toggle aria-controls="navbar-dark-example" />
                <ul className={`flex align-items-center ${styles["navbar-nav1"]}`}>
                        <Link className={`${styles["nav-item"]}`} to='/home'>Home</Link>
                        {/* <Nav.Link className={`${styles["nav-item"]}`} href="#banner">Home</Nav.Link> */}

                        <Link className={`${styles["nav-item"]}`} to='/members'>Members</Link>
                        {/* <Nav.Link className={`${styles["nav-item"]}`} href="#members">Members</Nav.Link> */}

                        <Link className={`${styles["nav-item"]}`} to='/multimedia'>Multimedia</Link>

                        <Link className={`${styles["nav-item"]}`} to='/interestingShit'>Interesting Shit</Link>

                        <Nav.Link className={`${styles["nav-item"]}`} href="#">D&D</Nav.Link>

                        <Link className={`${styles["nav-item"]}`} to='/profile'>Profile</Link>

                        <Link className={`${styles["nav-item"]}`} to='/signIn'>Sign In</Link>

                        {/* <NavDropdown
                            id="nav-dropdown-dark-example"
                            title="Dropdown"
                            menuVariant={props.darkMode ? "dark" : "light"}
                            className={`${styles["nav-item"]}`}
                        >
                            <NavDropdown.Item href="#multim">Interesting Shit</NavDropdown.Item>
                            <NavDropdown.Item href="#">Latest Multimedia</NavDropdown.Item>
                        </NavDropdown> */}

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
