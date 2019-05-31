import React, { Component } from 'react'
import Logo from '../../HRlogo.png'
import styles from './Header.module.css';

class Header extends Component {
    render(){
        return(
            <header className={styles.header}>
                <img src={Logo} className={styles.logo}></img>
                <div className={styles.headerline}></div>
            </header>
        )
    }
}

export default Header