import React, { Component } from "react";
import styles from "./Header.module.css";

export default class Header extends Component {

    state={
        login_href:"/edu_section/login",
        register_href:"/edu_section/register",
        contact_href:"/edu_section/contact",
        help_href:"/edu_section/help",
    }

    render(){
        return(
            <div className={styles.con}>
                
                <div className={styles.sec1}>
                    <img className={styles.logo} src={"/svg/tootifa_logo.svg"}/>
                    <div className={styles.logo_tx}>{"Tootifa"}</div>
                </div>

                <div className={styles.sec2}>
                    <a href={this.state.contact_href}>{"ارتباط با ما"}</a>
                    <a href={this.state.help_href}>{"راهنما"}</a>
                </div>

                <div className={styles.sec2}>
                    <a href={this.state.login_href} onClick={this.onLogin}>{"ورود"}</a>
                    <a href={this.state.register_href} className={styles.register} onClick={this.onRegister}>{"ثبت نام"}</a>
                </div>
                
            </div>
        )
    }
}