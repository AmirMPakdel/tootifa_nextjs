import React, { Component } from "react";
import styles from "./Button.module.css";

export default class Button extends Component {
    
    render(){

        let add_class = "";
        if(this.props.className){
            add_class+=this.props.className+" ";
        }

        return(
            <div className={styles.con+" amp_btn "+add_class} onClick={this.props.onClick}>

                {this.props.title}
                
            </div>
        )
    }
}