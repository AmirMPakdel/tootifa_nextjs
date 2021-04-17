import React, { Component } from "react";
import MainButton from "../../components/mainPage/MainButton";
import EducatorDashboardLayout from "../../layouts/EducatorDashboardLayout";
import styles from "./finances.module.css";

export default class finances extends Component {
    
    render(){
        return(
            <EducatorDashboardLayout>

                <div className={styles.con}>

                    <FinanceCard title="فروش پک آموزشی شماره سیزده"/>

                    <FinanceCard title="افزایش اعتبار" red/>

                    <FinanceCard title="فروش پک آموزشی جمعبندی فیزیک"/>

                    <FinanceCard title="افزایش اعتبار" red/>

                    <FinanceCard title="فروش پک آموزشی جمعبندی فیزیک"/>

                    <FinanceCard title="فروش پک آموزشی جمعبندی ریاضی دوازدهم"/>
                    

                </div>

            </EducatorDashboardLayout>
        )
    }
}

function FinanceCard(props){

    let s = {};
    let img_style = {};
    let img = "/svg/finance_up.svg";
    if(props.red){
        s = {borderColor:"#d1114d"};
        img = "/svg/finance_down.svg";
        img_style = {transform : "rotateZ(180deg)"}
    }

    return(
        <div className={styles.f_con} style={s}>

            <img className={styles.f_img} src={img} style={img_style}/>

            <div className={styles.f_title}>{props.title}</div>

            <img className={styles.f_sep_dash} src={"/svg/finance_dash.svg"}/>

            <div className={styles.f_price}>
                {"60,000"}
                <div className={styles.f_price_tag}>{"تومان"}</div>
            </div>

            <img className={styles.f_sep_dash} src={"/svg/finance_dash.svg"}/>

            <div className={styles.f_date}>{"1400/01/02"}</div>

            <MainButton className={styles.f_show_btn} title={"نمایش"}
            onClick={()=>{window.location.href+="/receipt"}}/>

        </div>
    )
}