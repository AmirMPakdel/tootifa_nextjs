import React, { Component } from "react";
import styles from "./TextInput.module.css";

export default class TextInput extends Component {
    
    render(){
        return(
            <input className={styles.input} value={this.props.value}
            onChange={(e)=>this.props.onChange(e.target.value)}
            placeholder={this.props.placeholder}/>
        )
    }
}