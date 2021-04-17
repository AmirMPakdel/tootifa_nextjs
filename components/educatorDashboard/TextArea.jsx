import React, { Component } from "react";
import styles from "./TextArea.module.css";

export default class TextArea extends Component {
    
    render(){

        let add_class = "";
        let title_st = {};

        if(this.props.className){
            add_class += this.props.className+" ";
        }

        if(!this.props.value){
            title_st = {opacity : 0};
        }

        return(
            <div className={styles.con+" "+add_class}>
                
                <div className={styles.title} style={title_st}>{"بایو"}</div>
                <textarea className={styles.textarea} placeholder={this.props.title}
                value={this.props.value} onChange={e=>this.props.onChange(e.target.value)}/>
                
            </div>
        )
    }
}