import React, { Component } from 'react'
import styles from './Form.module.css'

class Form extends Component {
    render(){
        return(
            <div className={styles.loginBox}>
                <form onSubmit={this.props.event} className={styles.loginForm}>
                    {this.props.children}
                </form>
            </div>
        )
    }
}

export default Form