import React, { Component } from "react";
import Controller from "../../utils/Controller";
import MainButton from "../mainPage/MainButton";
import styles from "./MyOrders.module.css";
import OrderReceipt from "./OrderReceipt";

export default class MyOrders extends Component {

    onView = ()=>{
        Controller.user_change_tab(<OrderReceipt/>)
    }
    
    render(){
        return(
            <div className={styles.mord_con}>

                <div className={styles.mord_header_con}>

                    <div>{"سفارش"}</div>
                    <div>{"تاریخ"}</div>
                    <div>{"وضعیت"}</div>
                    <div>{"مجموع"}</div>
                    <div>{"عملیات"}</div>

                </div>

                {
                    arr.map((v,i)=>(
                        <OrderCard key={i} onClick={this.onView}/>
                    ))
                }
                
            </div>
        )
    }
}

function OrderCard(props){
    return(
        <div className={styles.ordcrd_con}>
            <div>{"#2256"}</div>
            <div>{"23 آذر 1400"}</div>
            <div>{"تکمیل شده"}</div>
            <div>{"240,000 تومان برای 1 مورد"}</div>
            <div><MainButton title={"نمایش"} onClick={props.onClick}/></div>
        </div>
    )
}

const arr = [
    {},
    {},
    {},
    {},
    {},
    {},
]