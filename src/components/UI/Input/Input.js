import React, { Component } from 'react'
import Classes from './Input.module.css'
export class Input extends Component {
    render() {
        return (
            <div>
                <input 
                onChange={this.props.event}
                placeholder={this.props.placeholder}
                type={this.props.type}
                name="username"
                className={Classes.input}/>
                <div>
                {this.props.errors.username && <span className={Classes.input_error}>{this.props.errors.username} </span>}
                </div>
                
            </div>
        )
    }
}

export default Input
