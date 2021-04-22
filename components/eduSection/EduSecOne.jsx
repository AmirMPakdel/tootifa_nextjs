import React, { Component } from "react";
import styles from "./EduSecOne.module.css";

export default class EduSecOne extends Component {
    
    render(){
        return(
            <div className={styles.con}>

                <img className={styles.rect1} src={"/svg/edu_section_sec1_rect1.svg"}/>

                <img className={styles.circ1} src={"/svg/edu_section_sec1_circ1.svg"}/>
                
            </div>
        )
    }
}