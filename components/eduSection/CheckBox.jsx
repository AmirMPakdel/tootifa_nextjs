import React, { Component } from "react";
import styles from "./CheckBox.module.css";

export default class CheckBox extends Component {
    
    render(){
        let add_class = "";
        if(this.props.className){
            add_class+=this.props.className+" ";
        }

        return(
            <div className={styles.con+" "+add_class} onClick={this.props.onClick}>

                {
                    this.props.checked?
                    <img className={styles.img1} src={"/svg/select_selected_register.svg"}/>:
                    <img className={styles.img2} src={"/svg/select_unselected.svg"}/>
                }

                <div className={styles.title}>{this.props.title}</div>
                
            </div>
        )
    }
}