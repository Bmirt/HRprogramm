import React, { Component } from "react";
import Classes from "./Input.module.css";
export class Input extends Component {
  render() {
    console.log('this is inputjs',this.props)
    const styles = this.props.error ? Classes.input_error : Classes.input;
    return (
      <div style={{ position: "relative" }}>
        <input
          onChange={this.props.event}
          placeholder={this.props.placeholder}
          type={this.props.type}
          name={this.props.name}
          className={styles}
        />
        
      </div>
    );
  }
}

export default Input;
