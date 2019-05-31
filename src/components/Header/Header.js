import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Logo from '../../HRlogo.png'
import styles from './Header.module.css';

class Header extends Component {
    render(){
        return(
            <header className={styles.header}>
                <Link to="/">
                    <img src={Logo} className={styles.logo}></img>
                </Link>
                <div className={styles.headerline}></div>
            </header>
        )
    }
}

export default Header