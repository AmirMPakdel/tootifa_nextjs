import React, { Component } from "react";
import MainButton from "../mainPage/MainButton";
import styles from "./PriceCategoryPage.module.css";
import TextInput from "./TextInput";

export default class PriceCategoryPage extends Component {

    onChangeText = (key, value)=>{



    }
    
    render(){
        return(
            <>
            <div className={styles.con}>

                <div className={styles.sec_con}>
                    
                    <div className={styles.sec_title}>{"عنوان و قیمت دوره"}</div>

                    <div className={styles.info_sec1}>{text1}</div>

                    <input className={styles.txinput1} placeholder={"عنوان دوره"}
                    onChange={this.onChangeText}/>

                    <div className={styles.info_sec2}>{text2}</div>

                    <input className={styles.txinput1} placeholder={"قیمت دوره"}
                    onChange={this.onChangeText}/>

                </div>

                <div className={styles.sec_con}>
                    
                    <div className={styles.sec_title}>{"دسته بندی"}</div>

                    <div className={styles.bar1}>

                        <SelectedCat title={"توسعه وب"}/>
                        <SelectedCat title={"پی اچ پی"}/>
                        <SelectedCat title={"لاراول 5"}/>

                    </div>

                    <div className={styles.wrapper1}>

                        {
                            catgr_lev1.map((v,i)=>(
                                <div key={i} className={styles.cat_btn+" amp_btn"}>{v.title}</div>
                            ))
                        }

                    </div>

                </div>

            </div>

            <div className={styles.wrapper2}>

                <MainButton className={styles.next_btn} title={"تایید و ادامه"}/>

            </div>
            </>
        )
    }
}

function SelectedCat(props){
    return(
        <div className={styles.sel_cat_con}>
            <img src={"/svg/close_icon.svg"}/>
            <div>{props.title}</div>
            <div className={styles.div1}>{">"}</div>
        </div>
    )
}

const text1 = "در این قسمت عنوان دوره‌ای را که قصد دارید دوره با این نام ثبت شود و به فروش رود وارد کنید";
const text2 = "در این قسمت، قیمت مد نظر خود را برای فروش دوره وارد کنید";

const catgr_lev1 = [
    {title:"برنامه نویسی"},
    {title:"ورزش"},
    {title:"ریاضی"},
    {title:"دروس دبیرستان"},
    {title:"برنامه نویسی"},
    {title:"ورزش"},
    {title:"ریاضی"},
    {title:"دروس دبیرستان"},
    {title:"برنامه نویسی"},
    {title:"ورزش"},
    {title:"ریاضی"},
    {title:"دروس دبیرستان"},
    {title:"برنامه نویسی"},
    {title:"ورزش"},
];