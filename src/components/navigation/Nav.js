// import styles of this component
import styles from "./Nav.module.css"
import React from 'react'
// import other react pkg to use
import Hamburger from 'hamburger-react'
import { useState } from 'react'


// Nav component
export default function Nav(props) {
    const [isOpen, setOpen] = useState(false)

    return (
        <nav className={props.darkMode ? `${styles.navDark} flex align-items-center`:`${styles.nav} flex align-items-center`}>
            <ul className={`flex align-items-center ${styles["navbar-nav"]}`}>
                <li className={`${styles["nav-item"]} ${styles["d-none-1100"]}`}>
                    <a href="#" className={`${styles["nav-item"]} ${styles.active}`}>Home</a>
                </li>
                <li className={`${styles["nav-item"]} ${styles["d-none-1100"]}`}>
                    <a href="#multim" className={`${styles["nav-item"]}`}>Multimedia</a>
                </li>
                <li className={`${styles["nav-item"]} ${styles["d-none-1100"]}`}>
                    <a href="#main" className={`${styles["nav-item"]}`}>Interesting Shit</a>
                </li>
                <li className={`${styles["nav-item"]} ${styles["d-none-1100"]}`}>
                    <a href="#main" className={`${styles["nav-item"]}`}>Latest Multimedia</a>
                </li>
                <li className={`${styles["nav-item"]} ${styles["d-none-1100"]}`}>
                    <a href="#members" className={`${styles["nav-item"]}`}>Members</a>
                </li>
                <li className={`${styles["nav-item"]} ${styles["d-none-1100"]}`}>
                    <a href="#main" className={`${styles["nav-item"]}`}>D&D</a>
                </li>
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
            <div className={`${styles["dd"]}`}>
                <Hamburger color="#FF8A65" toggled={isOpen} toggle={setOpen} rounded />
                {isOpen && <ul className={`${styles["ddUl"]}`}>
                </ul>}
            </div>
        </nav>
    )
}
