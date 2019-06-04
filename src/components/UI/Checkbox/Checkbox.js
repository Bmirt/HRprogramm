import React,{Component} from 'react'
import styles from "./Checkbox.module.css";

class Checkbox extends Component {

    render(){
        if(this.props.checked)
        return (
            <div className={styles.checkSquare} onClick={this.props.handleClick}>✓</div>
        )
        return (
            <div className={styles.checkSquare} onClick={this.props.handleClick}></div>
        )
    }
  }
  


export default Checkbox
