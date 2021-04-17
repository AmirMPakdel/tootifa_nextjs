import React, { Component } from "react";
import Header from "../components/studentDashboard/Header";
import MyCourses from "../components/studentDashboard/MyCourses";
import HomeLayout from "../layouts/HomeLayout";
import Controller from "../utils/Controller";
import styles from "./user.module.css";

export default class user extends Component {

    state={
        tab:<MyCourses/>
    }

    componentDidMount(){
        
        Controller.user_change_tab = this.changeTab;
    }

    changeTab = (jsx)=>{
        this.setState({tab:jsx});
    }
    
    render(){
        return(
            <HomeLayout>

                <Header/>

                {
                    this.state.tab
                }

                <div style={{height:"20rem"}}/>

            </HomeLayout>
        )
    }
}