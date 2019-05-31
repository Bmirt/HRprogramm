import React, { Component } from 'react'
import styles from './Form.module.css'

class Form extends Component {
    render(){
        return(
            <div className={styles.formBox}>
                <form onSubmit={this.props.event} className={styles.formForm}>
                    <label>{this.props.title}</label>
                    {this.props.children}
                </form>
            </div>
        )
    }
}

export default Form