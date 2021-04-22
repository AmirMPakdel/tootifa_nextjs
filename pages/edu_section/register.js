import React, { Component } from "react";
import Button from "../../components/eduSection/Button";
import CheckBox from "../../components/eduSection/CheckBox";
import TextInput from "../../components/eduSection/TextInput";
import EduSectionLayout from "../../layouts/EduSectionLayout";
import styles from "./register.module.css";

export default class register extends Component {
    
    state={
        login_href:"/edu_section/login",
        terms_href:"/edu_section/terms",
        privacy_href:"/edu_section/privacy",
        phone_number:"",
        password:"",
        acception:true,
    }

    onAcception=()=>{
        this.setState({acception:!this.state.acception});
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
                            {"قبلا ثبت نام کرده اید؟ برای ورود  "}
                            <a href={this.state.login_href}>{"اینجا"}</a>
                            {" را کلیک کنید"}
                        </div>

                    </div>

                    <div className={styles.left_sec}>

                        <TextInput placeholder={"نام"}
                        onChange={(t)=>this.onInput("first_name",t)}/>

                        <TextInput placeholder={"نام خانوادگی"}
                        onChange={(t)=>this.onInput("last_name",t)}/>

                        <TextInput placeholder={"شماره همراه"}
                        onChange={(t)=>this.onInput("phone_number",t)}/>

                        <TextInput placeholder={"گذرواژه"}
                        onChange={(t)=>this.onInput("password",t)}/>

                        <TextInput placeholder={"تکرار گذرواژه"}
                        onChange={(t)=>this.onInput("re_password",t)}/>

                        <Button className={styles.register_btn} title={"ثبت نام"} onClick={this.onLogin}/>

                        <div className={styles.laws_con}>
                            {"با ورود و یا ثبت نام در توتیفا شما "}
                            <a href={this.state.terms_href}>{"شرایط و قوانین "}</a>
                            {"استفاده از سرویس های سایت توتیفا و "}
                            <a href={this.state.privacy_href}>{"قوانین حریم خصوصی "}</a>
                            {"آن را می‌پذیرید"}
                        </div>

                    </div>

                </div>

            </EduSectionLayout>
        )
    }
}