import React, { Component } from "react";
import Button from "../../components/eduSection/Button";
import CheckBox from "../../components/eduSection/CheckBox";
import TextInput from "../../components/eduSection/TextInput";
import EduSectionLayout from "../../layouts/EduSectionLayout";
import styles from "./login.module.css";

export default class login extends Component {
    
    state={
        register_href:"/edu_section/register",
        phone_number:"",
        password:"",
        remeber_me:true,
    }

    onRemeberMe=()=>{
        this.setState({remeber_me:!this.state.remeber_me});
    }

    onInput=(key, value)=>{
        let obj={};
        obj["key"]=value;
        this.setState({obj});
    }

    onLogin=()=>{
        
    }

    render(){
        return(
            <EduSectionLayout>

                <div className={styles.con}>

                    <img className={styles.shape1} src={"/svg/edu_section_shape1.svg"}/>

                    <div className={styles.right_sec}>

                        <img className={styles.right_img} src={"/svg/edu_section_register_pic.svg"}/>

                        <div className={styles.go_register_link}>
                            {"کاربرجدید هستید؟ برای ثبت نام "}
                            <a href={this.state.register_href}>{"اینجا"}</a>
                            {" کلیک کنید"}
                        </div>

                    </div>

                    <div className={styles.left_sec}>

                        <TextInput placeholder={"شماره همراه"}
                        onChange={(t)=>this.onInput("phone_number",t)}/>

                        <TextInput placeholder={"گذرواژه"}
                        onChange={(t)=>this.onInput("password",t)}/>

                        <div className={styles.sec1}>
                            
                            <CheckBox title={"مرا به خاطر بسپار"} checked={this.state.remeber_me}
                            onClick={this.onRemeberMe}/>

                            <div className={styles.forgot_link+" register_link"}>
                                {"بازیابی گذرواژه"}
                            </div>

                        </div>

                        <Button className={styles.register_btn} title={"ورود"} onClick={this.onLogin}/>

                    </div>

                </div>

            </EduSectionLayout>
        )
    }
}