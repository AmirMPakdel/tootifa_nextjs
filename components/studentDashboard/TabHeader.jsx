import React, { Component } from "react";
import Controller from "../../utils/Controller";
import MyCourses from "./MyCourses";
import MyFavorits from "./MyFavorits";
import MyOrders from "./MyOrders";
import MyProfile from "./MyProfile";
import styles from "./TabHeader.module.css";

export default class TabHeader extends Component {
    
    state={selected:0}

    onSelect = (number)=>{

        let tab = <MyCourses/>;

        switch(number){
            case 1: {
                tab=<MyFavorits/>;
                break;
            };
            case 2: {
                tab=<MyOrders/>;
                break;
            }
            case 3: {
                tab=<MyProfile/>;
                break;
            }
        }

        Controller.user_change_tab(tab);

        this.setState({selected:number});
    }

    render(){
        return(
            <div className={styles.TabHeader_con}>

                <Tab number={0} title={"دوره های من"} selected={this.state.selected}
                onClick={this.onSelect}/>
                <Tab number={1} title={"علاقمندی ها"} selected={this.state.selected}
                onClick={this.onSelect}/>
                <Tab number={2} title={"تاریخچه سفارشات"} selected={this.state.selected}
                onClick={this.onSelect}/>
                <Tab number={3} title={"صفحه شخصی"} selected={this.state.selected}
                onClick={this.onSelect}/>

            </div>
        )
    }
}

function Tab(props){
    return(
        <div className={styles.tab+" amp_btn"} onClick={()=>props.onClick(props.number)}>
            <div className={styles.title}>{props.title}</div>
            {
                props.number == props.selected?
                <div className={styles.tab_line_on}/>:
                <div className={styles.tab_line}/>
            }
        </div>
    )
}