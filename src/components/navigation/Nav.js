import styles from "./Nav.module.css"
import React from 'react'

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';


// Nav component
export default function Navig(props) {

    return (
        <Navbar className={props.darkMode ? `${styles.navDark} flex align-items-center` : `${styles.nav} flex align-items-center`} bg={props.darkMode ? "dark" : "light"} id="nb" expand="lg">
                <Navbar.Toggle aria-controls="navbar-dark-example" />
                <ul className={`flex align-items-center ${styles["navbar-nav1"]}`}>
                        <Nav.Link className={`${styles["nav-item"]}`} href="#banner">Home</Nav.Link>
                        <NavDropdown
                            id="nav-dropdown-dark-example"
                            title="Dropdown"
                            menuVariant={props.darkMode ? "dark" : "light"}
                            className={`${styles["nav-item"]}`}
                        >
                            <NavDropdown.Item href="#multim">Interesting Shit</NavDropdown.Item>
                            <NavDropdown.Item href="#">Latest Multimedia</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link className={`${styles["nav-item"]}`} href="#members">Members</Nav.Link>
                        <Nav.Link className={`${styles["nav-item"]}`} href="#">D&D</Nav.Link>
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
