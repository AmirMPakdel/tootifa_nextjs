import React, { Component } from "react";
import EducatorDashboardLayout from "../../layouts/EducatorDashboardLayout";
import styles from "./index.module.css";
import {Redirect} from 'next';

export default class index extends Component {
    
    componentDidMount(){
        window.location.href += "/dashboard"
    }

    render(){
        return(
            <div/>
        )
    }
}