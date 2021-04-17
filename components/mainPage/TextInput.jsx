import React, { Component } from "react";
import styles from "./TextInput.module.css";

export default class TextInput extends Component {
    
    render(){

        let add_class = "";

        if(this.props.className){
            add_class += this.props.className+" ";
        }

        return(
            <input className={styles.input+" "+add_class} placeholder={this.props.placeholder}
            value={this.props.value}/>
        )
    }
}