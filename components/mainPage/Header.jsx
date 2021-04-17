import React, { Component } from "react";
import styles from "./Header.module.css";
import MainButton from "./MainButton";

export default class Header extends Component {
    
    render(){
        return(
            <div className={styles.header_con}>

                <MainButton title={"ثبت نام"}/>
                <div className={styles.space1}/>
                <MainButton title={"ورود"} white_border/>
                
            </div>
        )
    }
}